import nodemailer from 'nodemailer';

export const handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    try {
        const { name, location, genre, instagram, email, links, message } = JSON.parse(event.body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 1. Notification Email to CMG
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'cozulemezmusicgroup@gmail.com',
            subject: `New Artist Application: ${name}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0071e3;">New Artist Submission</h2>
          <p><strong>Artist/Label:</strong> ${name}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Genre:</strong> ${genre}</p>
          <p><strong>Instagram:</strong> <a href="${instagram}">${instagram}</a></p>
          <p><strong>Contact:</strong> ${email}</p>
          <p><strong>Links:</strong> <a href="${links}">${links}</a></p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        };

        // 2. Auto-Responder to Artist
        const artistMailOptions = {
            from: `"Cozulemez Music Group" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Welcome to Cozulemez Music Group',
            html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px; line-height: 1.6; color: #1d1d1f; max-width: 600px; margin: auto;">
          <h1 style="font-size: 26px; font-weight: 700; color: #000; margin-bottom: 24px;">Welcome to Cozulemez Music Group.</h1>
          <p>Dear ${name},</p>
          <p>Your application has been successfully received and is now entering our <strong>A&R evaluation cycle</strong>. At Cozulemez Music Group (CMG), we maintain a highly selective partnership model to ensure each project receives the sophisticated infrastructure and strategic focus it deserves.</p>
          <p>Our team will conduct a thorough audit of your project’s sonic fidelity, brand cohesion, and global territory potential. This process typically concludes within 48 to 72 hours.</p>
          
          <div style="background: #f5f5f7; padding: 24px; border-radius: 14px; margin: 32px 0; border-left: 4px solid #000;">
             <p style="margin: 0; font-style: italic; color: #444;">"We empower creators who refuse to be categorized, offering a high-fidelity roadmap to global resonance and cultural impact."</p>
          </div>

          <p>In the interim, we invite you to follow our journey and see our collaborative network in action:</p>
          <p style="margin-top: 20px;">
            <a href="https://instagram.com/cmg.gl" style="display: inline-block; padding: 14px 28px; background: #000; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px;">Follow @cmg.gl on Instagram →</a>
          </p>
          
          <hr style="border: 0; border-top: 1px solid #e5e5e7; margin: 40px 0;">
          <p style="font-size: 12px; color: #86868b; text-align: center;">© 2026 COZULEMEZ MUSIC GROUP. ALL RIGHTS RESERVED.</p>
        </div>
      `,
        };

        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(artistMailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        console.error('NETLIFY ERROR:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: error.message }),
        };
    }
};
