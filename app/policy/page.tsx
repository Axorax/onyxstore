"use client";

import "../article.css";
import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { AuroraText } from "@/components/ui/aurora-text";

export default function PolicyPage() {
  return (
    <>
      <Navbar />
      <div className="article-container">
        <header className="article-header">
          <h1 className="article-title">
            <AuroraText>Policy</AuroraText>
          </h1>
        </header>

        <article className="article-content">
          <section>
            <h2>Refunds</h2>
            <p>
              We do not accept any refunds. Please make sure your order is
              correct before completing your purchase.
            </p>
          </section>

          <section>
            <h2>Quality Control</h2>
            <p>
              Every item is manually checked before shipping to ensure it meets
              our quality standards.
            </p>
          </section>

          <section>
            <h2>Delivery Time</h2>
            <p>
              Delivery is usually completed within 10 days. Please note that
              delays may occur depending on your location.
            </p>
          </section>

          <section>
            <h2>Payment</h2>
            <p>
              Currently, we only accept payments via <strong>bKash</strong>. In
              the future, we will also support Cash on Delivery (COD).
            </p>
          </section>

          <section>
            <h2>Support</h2>
            <p>
              For any questions or assistance, message us on Instagram and we
              will help you.
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </>
  );
}
