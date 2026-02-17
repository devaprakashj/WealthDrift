export const subscribeToNewsletter = async (email: string) => {
    // NOTE: In a production environment, you should NEVER use the API key directly in the frontend.
    // You should create a backend API route to handle this safely.
    const RESEND_API_KEY = "re_iTkVhjK9_BJ16SN9eeD7cJHwDA8D3qg91";

    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "WealthDrift Newsletter <onboarding@resend.dev>",
                to: email,
                subject: "Welcome to WealthDrift!",
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                        <h1 style="color: #00ffa3;">Welcome to WealthDrift!</h1>
                        <p style="font-size: 16px; color: #333;">Hi there,</p>
                        <p style="font-size: 16px; color: #333;">Thank you for joining 50,000+ Americans building generational wealth. You're now on the list to receive our weekly deep-dives into US investing, tax strategies, and credit hacks.</p>
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                        <p style="font-size: 14px; color: #666;">Best regards,<br />Devaprakash J<br />Founder, WealthDrift</p>
                    </div>
                `,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Failed to subscribe");
        }

        return { success: true };
    } catch (err) {
        console.error("Newsletter Error:", err);
        throw err;
    }
};
