import { auth } from "firebase-admin";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { customInitApp } from "@/app/lib/firebase-admin-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth as authConfig } from "@/app/lib/firebase-config"; // Replace with actual cookies library if needed

customInitApp();

async function handleBearerToken(
  authorization: string | null
): Promise<NextResponse> {
  if (authorization?.startsWith("Bearer ")) {
    const idToken = authorization.split("Bearer ")[1];
    const decodedToken = await auth().verifyIdToken(idToken);
    if (decodedToken) {
      const expiresIn = 5 * 60 * 1000;
      const sessionCookie = await auth().createSessionCookie(idToken, {
        expiresIn,
      });
      const options = {
        name: "session",
        value: sessionCookie,
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
      };
      cookies().set(options);
      return NextResponse.json({}, { status: 200 });
    }
  }
  throw new Error("Authorization token is not valid.");
}

async function handleEmailAndPassword(
  email: string,
  password: string
): Promise<NextResponse> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      authConfig,
      email,
      password
    );
    const user = userCredential.user;
    const authorization = (<any>user).accessToken;
    if (authorization) {
      const idToken = authorization;
      const decodedToken = await auth().verifyIdToken(idToken);
      if (decodedToken) {
        const expiresIn = 5 * 60 * 1000;
        const sessionCookie = await auth().createSessionCookie(idToken, {
          expiresIn,
        });
        const options = {
          name: "session",
          value: sessionCookie,
          maxAge: expiresIn,
          httpOnly: true,
          secure: true,
        };
        cookies().set(options);
        return NextResponse.json({ options }, { status: 200 });
      }
    }
  } catch (error: any) {
    console.error("Authentication error:", error);
    let errorMessage = "Authentication failed";
    // Check Firebase authentication error codes and handle them accordingly
    if (error.code === "auth/wrong-password") {
      errorMessage = "Wrong password";
    } else if (error.code === "auth/user-not-found") {
      errorMessage = "User not found";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "Invalid email address";
    }
    return NextResponse.json({ error: errorMessage }, { status: 401 });
  }
  throw new Error("Authentication failed.");
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      const authorization = request.headers.get("Authorization");
      return await handleBearerToken(authorization);
    } else {
      return await handleEmailAndPassword(email, password);
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request): Promise<NextResponse> {
  const session = cookies().get("session")?.value || "";
  //Validate if the cookie exist in the request
  if (!session) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }
  //Use Firebase Admin to validate the session cookie
  const decodedClaims = await auth().verifySessionCookie(session, true);
  if (!decodedClaims) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }
  return NextResponse.json({ isLogged: true }, { status: 200 });
}
