import React from "react";
import "/src/style.css";
import "/src/care.css";

export default function Care() {
  return (
    <>
      <div className="hero2">
        <div className="round-img">
          <img src="/images/care logo.jpeg" alt="Care Logo" />
        </div>
        <div className="hero2-txt">
          <h2>Everything you need to know about your new house friends!</h2>
        </div>
      </div>
      <hr />
      <div className="container">
        {/* ☀️ LIGHT */}
        <div id="sun-content" className="section sun-section">
          <div className="text-container1">
            <h2>Light</h2>
            <p>
              Light is one of the most important things your plant needs—but not
              all plants soak up the sun the same way.
            </p>
            <p>
              Some houseplants thrive in bright, direct light (think sunny
              windowsills), while others prefer softer, indirect light or even
              low-light corners. A good rule of thumb: leafy tropical plants
              usually love medium to bright indirect light, while desert plants
              like succulents crave direct sunlight.
            </p>
            <p>
              <strong>Fun Fact:</strong> Did you know plants can actually get
              sunburned? If you notice crispy brown edges, your plant might be
              getting too much direct sun! When in doubt, rotate your plant
              every week or two so all sides get some sun love. This helps it
              grow evenly and prevents that “leaning toward the window” look.
            </p>
            <p>
              Plants also have their preferences when it comes to direction.
              South-facing windows tend to get the most intense sunlight, while
              east-facing windows provide gentle morning light, which is perfect
              for more delicate species. West-facing windows offer warmer
              afternoon sun, and north-facing ones usually give the least light
              — ideal for low-light lovers like ZZ Plants or Snake Plants.
            </p>
            <p>
              Pro Tip: If you’re unsure how much light a spot gets, try the
              shadow test. Place your hand between the window and the surface —
              a sharp, clear shadow means bright light, a soft blurry one means
              medium light, and no shadow means low light.
            </p>
            <p>
              If natural light is limited in your space, don’t worry — grow
              lights are a great alternative. They mimic the sun and keep your
              plants thriving even in darker corners or during gloomy winter
              months. Plus, they come in cute, modern styles that blend right in
              with your decor. No matter where you live or how much sunlight
              your space gets, there’s a plant that will feel right at home.
            </p>
          </div>
          <div className="img-container1">
            <img src="/images/care - sunlight.png" alt="Sunlight care" />
          </div>
        </div>

        {/* 💧 WATERING */}
        <div id="water-content" className="section water-section">
          <div className="img-container2">
            <img src="/images/care - watering.png" alt="Watering care" />
          </div>
          <div className="text-container2">
            <h2>Watering</h2>
            <p>
              Water is life—for both you and your plant. But when it comes to
              houseplants, it’s all about balance. Overwatering is the #1 plant
              killer, so always check the soil before you pour. Stick your
              finger about an inch deep—if it feels dry, it’s time to water. If
              it’s still moist, wait a little longer.
            </p>
            <p>
              Different plants have different thirst levels. Tropical plants
              like ferns and calatheas enjoy consistently damp soil, while
              succulents and cacti prefer their soil to dry out completely
              between drinks. Hack alert: Want to avoid overwatering and make
              sure your plant gets just what it needs? Try bottom watering.
              Simply place your plant pot (with drainage holes) in a bowl of
              water and let it sit for about 20 minutes. The soil will soak up
              just the right amount of water from the bottom up—no soggy roots,
              no stress!
            </p>
            <p>
              Every plant has its rhythm, and it’s totally okay if you don’t get
              it right the first time. Keep an eye on your plant’s
              leaves—they’re great communicators. Wilting, yellowing, or soft
              stems are often signs of too much water, while crispy edges and
              drooping leaves can mean it’s too dry.
            </p>
            <p>
              Water quality matters too! If your tap water is heavily treated or
              high in minerals, it might cause leaf browning over time. If you
              notice that happening, try using filtered or rainwater—it’s
              gentler and more natural for most houseplants.
            </p>
            <p>
              Fun Fact: Many plants actually prefer a humid environment over
              frequent watering. Misting, grouping plants together, or placing a
              water tray nearby can create a mini tropical vibe—especially
              helpful for ferns, calatheas, and other humidity lovers. At the
              end of the day, watering is less about following strict rules and
              more about building a routine and paying attention. Your plant
              will tell you what it needs—you just have to listen.
            </p>
          </div>
        </div>

        {/* 🌿 NUTRITION */}
        <div id="nutrition-content" className="section nutrition-section">
          <div className="text-container3">
            <h2>Nutritions</h2>
            <p>
              Absolutely! Here's a well-rounded and friendly "Nutrition for
              Plants" section you can use for your website — written to match
              the tone of your existing content: Nutrition.
            </p>
            <p>
              Just like us, plants need more than water and sunshine to truly
              thrive—they need a balanced diet of nutrients to grow strong, stay
              green, and fight off stress. The three main nutrients in plant
              food are: Nitrogen (N): Helps plants grow lush, green leaves.
              Perfect for foliage-focused plants. Phosphorus (P): Supports
              strong root development and encourages flowering and fruiting.
              Potassium (K): Boosts overall health and helps regulate water
              within the plant.
            </p>
            <p>
              Together, they’re known as N-P-K, and you’ll often see those
              letters on fertilizer labels. Think of them as your plant’s
              essential vitamins! But that’s not all—plants also love a few
              micronutrients like calcium, magnesium, and iron. These might
              sound small, but they play a big role in everything from
              chlorophyll production to cell strength.
            </p>
            <p>
              Fun Fact: Indoor plants don’t get a steady flow of nutrients like
              they would in the wild. That’s why it’s helpful to give them a
              little boost every few weeks during the growing season (spring and
              summer).
            </p>
            <p>
              Pro Tip: Go easy on the fertilizer—too much can burn roots and do
              more harm than good. When in doubt, dilute your liquid plant food
              to half strength. With the right nutrients, your plants will grow
              happier, healthier, and greener—inside and out! Let me know if you
              want a simplified version (like for kids or beginners), or if you
              want this split into visuals or tip cards!
            </p>
          </div>
          <div className="img-container3">
            <img src="/images/care - nutritions.png" alt="Nutrition care" />
          </div>
        </div>
      </div>
    </>
  );
}
