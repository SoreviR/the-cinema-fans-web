import { createUserWithEmailAndPassword, Auth } from "firebase/auth";
import { auth } from "@/app/lib/firebase-config";
import { NextResponse } from "next/server";

interface User {
  email: string;
  password: string;
}

interface RegistrationResult {
  success: boolean;
  user?: User;
  error?: string;
}

// Function to register a new user using Firebase Authentication
export async function registerUser(
  email: string,
  password: string
): Promise<RegistrationResult> {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth as Auth,
      email,
      password
    );

    const user: User = { email, password };
    console.log("User registered:", user);

    // You can perform additional actions after successful registration, if needed.

    return { success: true, user };
  } catch (error) {
    console.error("Error during registration:", error);
    return { success: false }; // todo: verify how to implement error here
  }
}

// POST request handler
export async function POST(request: any, response: any) {
  try {
    // Extract email and password from the request body
    const { email, password }: User = await request?.json();

    console.log(email);
    // Check if email and password are provided
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    // Register the user
    const registrationResult: RegistrationResult = await registerUser(
      email,
      password
    );

    if (registrationResult.success) {
      // Registration successful
      return NextResponse.json({
        message: "Registration successful.",
        user: registrationResult.user,
      });
    } else {
      // Registration failed, return an error response
      return NextResponse.json(
        { error: registrationResult.error },
        { status: 500 }
      );
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("Error during registration:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
