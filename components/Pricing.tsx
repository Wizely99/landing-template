import React from "react";

export default function Pricing() {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-wide text-center sm:text-4xl">
        Ditch the Stone Age, Embrace the Space Age of POS!
      </h2>
      <p className="text-xl text-gray-500 mt-4 text-center">
        Tired of cash registers that look like they belong in a museum? Say
        goodbye to clunky interfaces and hello to **[Your POS Name]**, the POS
        system that's as **smooth as butter** and **more engaging than a Netflix
        binge** (well, maybe not that engaging, but definitely more fun than
        your old system).
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-center sm:text-2xl">
            The Starter
          </h3>
          <p className="text-gray-500 text-center mt-2">
            Perfect for Tiny Titans (and Budget-Conscious Heroes)
          </p>
          <div className="text-center mt-4">
            <span className="text-4xl font-bold">$19</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="list-disc mt-6 ml-4">
            <li>
              Basic inventory management (no more losing track of your prized
              inventory of sporks)
            </li>
            <li>
              Easy customer management (so you can remember their names, unlike
              that other cashier...)
            </li>
            <li>
              Transaction processing that's faster than a speeding bullet (well,
              maybe not that fast, but definitely faster than your old system)
            </li>
          </ul>
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
            Get Started
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-center sm:text-2xl">The Pro</h3>
          <p className="text-gray-500 text-center mt-2">
            For Businesses Ready to Level Up
          </p>
          <div className="text-center mt-4">
            <span className="text-4xl font-bold">$49</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="list-disc mt-6 ml-4">
            <li>Everything in the Starter plan, plus:</li>
            <li>
              Employee management (so you can finally track down who ate all the
              donuts)
            </li>
            <li>
              Advanced reporting (because data is the new oil, and you need to
              know what's going on)
            </li>
            <li>
              Loyalty programs (because everyone loves a good deal, even
              villains... maybe)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
