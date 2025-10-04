"use client";

import "../article.css";
import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { AuroraText } from "@/components/ui/aurora-text";

export default function ReferralPage() {
  return (
    <>
      <Navbar />
      <div className="article-container">
        <header className="article-header">
          <h1 className="article-title">
            <AuroraText>Referral Program</AuroraText>
          </h1>
        </header>

        <article className="article-content">
          <section>
            <h2>How to Become a Referrer</h2>
            <p>
              To become a referrer, message us on Instagram. We will create a
              unique referrer code for you.
            </p>
          </section>

          <section>
            <h2>How It Works</h2>
            <p>
              Share your referrer code with others. Every customer who purchases
              any of our products using your code earns you{" "}
              <strong>100 Taka</strong> and receives a{" "}
              <strong>5% discount</strong> on their purchase.
            </p>
          </section>

          <section>
            <h2>Payment</h2>
            <p>
              Your earnings from each sale will be paid via{" "}
              <strong>bKash</strong>. Make sure your payment details are
              correctly provided when you register as a referrer.
            </p>
          </section>

          <section>
            <h2>Start Referring</h2>
            <p>
              Message us on Instagram to get your referrer code and start
              earning today.
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </>
  );
}
