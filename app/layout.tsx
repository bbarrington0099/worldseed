import type { Metadata } from "next";
import { APP_NAME, APP_DESCRIPTION } from "@lib/constants";
import "./globals.scss";

export const metadata: Metadata = {
    title: {
        default: APP_NAME,
        template: `%s | ${APP_NAME}`,
    },
    description: APP_DESCRIPTION,
    keywords: ["D&D", "Dungeons and Dragons", "Alabastria", "Campaign", "Lore", "Fantasy"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="dark">
            <body>
                {children}
                <div id="modal-root" />
            </body>
        </html>
    );
}

