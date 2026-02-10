import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/", "/index"],
};

export function middleware(req: NextRequest) {
    // Check if we are in development
    if (process.env.NODE_ENV === "development") {
        return NextResponse.next();
    }

    const basicAuth = req.headers.get("authorization");
    const url = req.nextUrl;

    // Protect the entire shop in production until launch
    if (basicAuth) {
        const authValue = basicAuth.split(" ")[1];
        const [user, pwd] = atob(authValue).split(":");

        // Credentials: admin / txchyon2024 (Change this!)
        if (user === "admin" && pwd === "txchyon2024") {
            return NextResponse.next();
        }
    }

    url.pathname = "/api/auth";

    return new NextResponse("Auth Required", {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="Secure Shop Area"',
        },
    });
}
