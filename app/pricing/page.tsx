"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Pricing from "@/components/Pricing";

export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

const frequencies: PricingTierFrequency[] = [
  { id: "1", value: "1", label: "Monthly", priceSuffix: "/month" },
  { id: "2", value: "2", label: "Annually", priceSuffix: "/year" },
  { id: "3", value: "3", label: "Quarterly", priceSuffix: "/quarter" },
];

const tiers: PricingTier[] = [
  {
    name: "Starter",
    id: "0",
    href: "/",
    price: { "1": "10,000 Tsh", "2": "120,000 Tsh", "3": "30,000 Tsh" },
    discountPrice: { "1": "", "2": "100,000 Tsh", "3": "27,500 Tsh" },
    description: `Get all goodies for free, no credit card required.`,
    features: [
      `Single shop management`,
      `limited analytics`,
      `Upto to 2 users `,
      `Upto 10,000 unit sales`,
      `24/7 customer support`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Get Started`,
  },
  {
    name: "Pro",
    id: "1",
    href: "/",
    price: { "1": "30,000 Tsh", "2": "360,000", "3": "90,000 Tsh" },
    discountPrice: { "1": "", "2": "300,000 Tsh", "3": "80,000 Tsh" },
    description: `When you grow, need more power and flexibility.`,
    features: [
      `Manage up to 3 shops`,
      `unlimited analytics`,
      `Upto to 5 users `,
      `Upto 35,000 unit sales`,
      `24/7 customer support`,
    ],
    featured: true,
    highlighted: false,
    soldOut: false,
    cta: `Get started`,
  },
  {
    name: "Enterprise",
    id: "2",
    href: "/",
    price: { "1": "50,000 Tsh", "2": "600,000 Tsh", "3": "150,000 Tsh" },
    discountPrice: { "1": "", "2": "500,000 Tsh", "3": "135,000 Tsh" },
    description: `When you grow, need more power and flexibility.`,
    features: [
      `Manage up to 5 shops`,
      `unlimited analytics`,
      `Upto to 10 users `,
      `Upto 60,000 unit sales`,
      `24/7 customer support`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Get started`,
  },
];

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default function PricingPage() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  // const bannerText = "";

  return (
    <div className={cn("flex flex-col w-full mt-16 items-center")}>
      <div className="w-full flex flex-col items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full lg:w-auto mx-auto max-w-4xl lg:text-center">
            <div className="text-3xl text-gray-950 font-bold p-2 sm:p-6 sm:pb-2">
              Transition to the Future of POS Systems! 🚀
            </div>
            <div className="p-4 text-gray-700">
              Tired of cash registers that look like they belong in a museum?
              Say goodbye to clunky interfaces and hello to QuenchX
            </div>
            <h1 className="text-black dark:text-white text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight">
              Our Pricing
            </h1>
          </div>

          {frequencies.length > 1 ? (
            <div className="mt-16 flex justify-center">
              <RadioGroup
                defaultValue={frequency.value}
                onValueChange={(value: string) => {
                  setFrequency(frequencies.find((f) => f.value === value)!);
                }}
                className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
                style={{
                  gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
                }}
              >
                <Label className="sr-only">Payment frequency</Label>
                {frequencies.map((option) => (
                  <Label
                    className={cn(
                      frequency.value === option.value
                        ? "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white dark:bg-purple-900/70 dark:text-white/70"
                        : "bg-transparent text-gray-500 hover:bg-purple-500/10",
                      "cursor-pointer rounded-full px-2.5 py-2 transition-all"
                    )}
                    key={option.value}
                    htmlFor={option.value}
                  >
                    {option.label}

                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="hidden"
                    />
                  </Label>
                ))}
              </RadioGroup>
            </div>
          ) : (
            <div className="mt-12" aria-hidden="true"></div>
          )}

          <div
            className={cn(
              "isolate mx-auto mt-4 mb-28 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none",
              tiers.length === 2 ? "lg:grid-cols-2" : "",
              tiers.length === 3 ? "lg:grid-cols-3" : ""
            )}
          >
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  tier.featured
                    ? "!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100"
                    : "bg-white dark:bg-gray-900/80 ring-gray-300/70 dark:ring-gray-700",
                  "max-w-xs ring-1 rounded-3xl p-8 xl:p-10",
                  tier.highlighted
                    ? " bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
                    : ""
                )}
              >
                <h3
                  id={tier.id}
                  className={cn(
                    tier.featured
                      ? "text-white dark:text-black"
                      : "text-black dark:text-white",
                    "text-2xl font-bold tracking-tight"
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    tier.featured
                      ? "text-gray-300 dark:text-gray-500"
                      : "text-gray-600 dark:text-gray-400",
                    "mt-4 text-sm leading-6"
                  )}
                >
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={cn(
                      tier.featured
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white",
                      "text-4xl font-bold tracking-tight",
                      tier.discountPrice &&
                        (tier.discountPrice as Record<string, string>)[
                          frequency.value
                        ]
                        ? "line-through"
                        : ""
                    )}
                  >
                    {typeof tier.price === "string"
                      ? tier.price
                      : tier.price[frequency.value]}
                  </span>

                  <span
                    className={cn(
                      tier.featured
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                    )}
                  >
                    {typeof tier.discountPrice === "string"
                      ? tier.discountPrice
                      : tier.discountPrice[frequency.value]}
                  </span>

                  {typeof tier.price !== "string" ? (
                    <span
                      className={cn(
                        tier.featured
                          ? "text-gray-300 dark:text-gray-500"
                          : "dark:text-gray-400 text-gray-600",
                        "text-sm font-semibold leading-6"
                      )}
                    >
                      {frequency.priceSuffix}
                    </span>
                  ) : null}
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={cn(
                    "flex mt-6 shadow-sm",
                    tier.soldOut ? "pointer-events-none" : ""
                  )}
                >
                  <Button
                    size="lg"
                    disabled={tier.soldOut}
                    className={cn(
                      "w-full text-black dark:text-white",
                      !tier.highlighted && !tier.featured
                        ? "bg-gray-100 dark:bg-gray-600"
                        : "bg-purple-300 hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-700",
                      tier.featured || tier.soldOut
                        ? "bg-white dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-black"
                        : "hover:opacity-80 transition-opacity"
                    )}
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    {tier.soldOut ? "Sold out" : tier.cta}
                  </Button>
                </a>

                <ul
                  className={cn(
                    tier.featured
                      ? "text-gray-300 dark:text-gray-500"
                      : "text-gray-700 dark:text-gray-400",
                    "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={cn(
                          tier.featured ? "text-white dark:text-black" : "",
                          tier.highlighted
                            ? "text-purple-500"
                            : "text-gray-500",

                          "h-6 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-3xl shadow-lg">
          <p className="text-lg font-semibold text-center text-gray-800 mb-4">
            Still not convinced?
          </p>
          <p className="text-sm text-center text-gray-600 mb-8">
            <div className="bg-gray-100 rounded-lg p-6  mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                🚀 Try Our Service Risk-Free!
              </h2>
              <p className="text-lg mb-4">
                Take us for a spin before you commit. It's like a test drive,
                but for your business! 🚗
              </p>
              <p className="text-lg mb-4">
                24/7 customer support: We're here for you, even if your question
                is "Why is my dog eating the receipt?" (we don't have an answer
                for that one, but we'll try our best to help). 🐶
              </p>
              <p className="text-lg mb-4">
                So ditch the outdated POS and join the revolution! 🔥
              </p>
              <p className="text-lg mb-4">
                P.S. We also offer a free consultation to help you choose the
                perfect plan for your business. Because we're nice like that. 🎉
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
