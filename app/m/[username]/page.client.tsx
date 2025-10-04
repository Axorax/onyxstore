"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/blocks/navbar.tsx";

interface MemberData {
  username: string;
  name: string;
}

export default function MembershipCardPage({
  username,
  material = "default",
}: {
  username: string;
  material?: string;
}) {
  const [member, setMember] = useState<MemberData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    async function fetchMember() {
      try {
        const res = await fetch(`/api/membership/${username}`);
        const data = await res.json();
        if (data.error) setNotFound(true);
        else setMember(data.data);
      } catch {
        setNotFound(true);
      }
    }
    fetchMember();
  }, [username]);

  const handleMove = (clientX: number, clientY: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -10);
    setRotateY(((x - centerX) / centerX) * 10);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      handleMove(
        touch.clientX,
        touch.clientY,
        e.currentTarget.getBoundingClientRect(),
      );
    }
  };

  const handleReset = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      <Navbar />
      <div className="h-[calc(100dvh-3.1rem)] flex items-center justify-center p-8 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at center, black 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at center, black 0%, transparent 75%)",
            }}
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-3xl" />

        {notFound ? (
          <div className="text-center text-amber-300 text-xl font-medium z-10">
            This user doesn’t have a membership.
          </div>
        ) : !member ? (
          <div className="text-center text-amber-300 text-lg z-10">
            Loading...
          </div>
        ) : (
          <div className="w-full max-w-md relative z-10">
            <div
              className="relative w-full aspect-[1.586/1]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleReset}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleReset}
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-full transition-transform duration-500 ease-out"
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/${material && material !== "default" ? material : "marble"}.png')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-radial from-amber-900/20 via-transparent to-transparent" />
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        background:
                          "linear-gradient(135deg, transparent 0%, rgba(212,175,55,0.15) 35%, rgba(255,215,0,0.25) 50%, rgba(212,175,55,0.15) 65%, transparent 100%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                      }}
                    />
                  </div>

                  <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="relative w-14 h-11 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-lg shadow-xl">
                        <div className="absolute inset-[2px] bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-md" />
                        <div className="absolute inset-0 p-2">
                          <div className="absolute top-3 left-2 right-2 h-[1px] bg-amber-900/40" />
                          <div className="absolute top-5 left-2 right-2 h-[1px] bg-amber-900/40" />
                          <div className="absolute bottom-3 left-2 right-2 h-[1px] bg-amber-900/40" />
                          <div className="absolute left-3 top-2 bottom-2 w-[1px] bg-amber-900/40" />
                          <div className="absolute left-5 top-2 bottom-2 w-[1px] bg-amber-900/40" />
                          <div className="absolute right-3 top-2 bottom-2 w-[1px] bg-amber-900/40" />
                          <div className="absolute top-3 left-3 w-1 h-1 rounded-full bg-amber-900/60" />
                          <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-amber-900/60" />
                          <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-amber-900/60" />
                          <div className="absolute bottom-3 right-3 w-1 h-1 rounded-full bg-amber-900/60" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-900/70" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-lg" />
                      </div>

                      <div className="relative px-3.5 py-1 pt-0 pr-3 rounded-full bg-amber-500/15 border border-amber-400/30 backdrop-blur-md shadow-md">
                        <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-sm" />
                        <span className="relative text-center select-none text-[0.7rem] font-semibold tracking-[0.25em] text-amber-200 uppercase">
                          VIP
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="text-2xl z-10 select-none font-bold text-white tracking-wide drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">
                          {member.name}
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 text-amber-300/90">
                        <svg
                          className="w-4 h-4 drop-shadow-[0_0_4px_rgba(212,175,55,0.5)]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span className="text-sm font-medium tracking-wider select-none z-10">
                          @{member.username}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 0%, rgba(212,175,55,0.2) 40%, rgba(255,215,0,0.35) 50%, rgba(212,175,55,0.2) 60%, transparent 100%)",
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(212,175,55,0.1)] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/40 via-amber-950/30 to-black/60 blur-2xl -z-10 rounded-2xl"
                  style={{ transform: "translateZ(-50px) scale(0.95)" }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
