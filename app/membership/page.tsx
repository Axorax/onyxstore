"use client";

import "../article.css";
import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { AuroraText } from "@/components/ui/aurora-text";

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <style jsx>
        {`
          a {
            text-decoration: underline;
            color: #ffd700;
          }
        `}
      </style>
      <div className="article-container">
        <header className="article-header">
          <h1 className="article-title">
            <AuroraText>Membership</AuroraText>
          </h1>
        </header>

        <article className="article-content">
          <section>
            <h2>How to Get Membership</h2>
            <p>
              You can get a membership by purchasing any of our products that
              cost over 1000 Taka. After your purchase, message us on Instagram
              to claim your membership. There's no monthly fees or anything!{" "}
              <br />
              <br />
              Or, you can also pay us a one time payment of 300 Taka to get a
              membership.
            </p>
          </section>

          <section>
            <h2>Membership Benefits</h2>
            <p>
              Having a membership gives you a <strong>10% discount</strong> on
              all future purchases.
            </p>
            <p>
              Your membership card will be linked to your Instagram username,
              and you can customize the name displayed on your digital card.
            </p>
          </section>

          <section>
            <h2>Digital Membership Card</h2>
            <p>
              You will receive a cool-looking digital membership card that you
              can view anytime. Here is an example card:{" "}
              <a href="/m/aayanrizz">/m/aayanrizz</a>
            </p>
            <img src={"./card.png"} />
            <p>
              The card also comes in these styles.{" "}
              <a href="/m/aayanrizz?style=blue">Blue style</a>,{" "}
              <a href="/m/aayanrizz?style=red">red style</a>,{" "}
              <a href="/m/aayanrizz?style=pink">pink style</a>,{" "}
              <a href="/m/aayanrizz?style=orange">orange style</a>,{" "}
              <a href="/m/aayanrizz?style=green">green style</a>,{" "}
              <a href="/m/aayanrizz?style=jewels">jewels style</a>.
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </>
  );
}
