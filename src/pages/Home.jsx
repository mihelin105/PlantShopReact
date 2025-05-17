import { Link } from "react-router-dom";
import React from "react";
import "/src/style.css";

export default function Home() {
  return (
    <div className="container">
      <div className="banner">
        <div>
          <Link className="navbar-brand" to="/houseplants">
            Free Shipping for orders above $100
          </Link>
        </div>
      </div>

      <div className="hero">
        <div className="hero-text">
          <p className="big-text shippori-mincho-regular">
            Enhance your home <br />
            with green life
          </p>
          <div>
            <button className="hero-bttn">Shop More</button>
          </div>
        </div>
      </div>

      <div className="column-plants">
        {[
          {
            name: "Monstera",
            price: 40,
            img1: "/images/Serene Monstera Plant in Stylish Beige Pot - Indoor Plant Enthusiast's Favorite 1.png",
            img2: "/images/Monstera Deliciosa - 35-50 cm 1.png",
          },
          {
            name: "Fiddle Leaf Fig",
            price: 45,
            img1: "/images/Fiddle Leaf Fig For Indoor Plants Ideas 1.png",
            img2: "/images/fiddle leaf fig.jpeg",
          },
          {
            name: "Rubber Fig",
            price: 35,
            img1: "/images/download 1.png",
            img2: "/images/rubber fig leaves.jpeg",
          },
        ].map((plant, index) => (
          <div className="product" key={index}>
            <img src={plant.img1} className="default-img" alt={plant.name} />
            <img src={plant.img2} className="hover-img" alt={plant.name} />
            <div className="icon cloud">
              <i className="fa-solid fa-cloud"></i>
            </div>
            <div className="icon moon">
              <i className="fa-regular fa-moon"></i>
            </div>
            <div className="icon sun">
              <i className="fa-regular fa-sun"></i>
            </div>
            <h3>{plant.name}</h3>
            <p>$ {plant.price}</p>
          </div>
        ))}
      </div>

      <section className="plant-care-section">
        <div className="top-row">
          <div className="text-box">
            <h2 className="shippori-mincho-regular">
              Why Taking Care of Plants Matters
            </h2>
            <p>
              Taking care of plants goes beyond just keeping them alive — it
              brings a range of benefits to both people and their environments.
              Healthy plants improve air quality, boost mood, and add a sense of
              calm to indoor spaces. Regular care, such as watering, providing
              enough light, and removing dust or dead leaves, helps plants
              thrive and grow beautifully. Caring for plants can also be a
              mindful, rewarding routine, encouraging patience and
              responsibility. Whether you're nurturing a single houseplant or an
              entire garden, consistent attention ensures that plants stay
              vibrant, resilient, and continue to enhance your space with their
              natural beauty.
            </p>
          </div>
          <div className="main-img-box">
            <img
              src="/images/Download free image of Monsteras nature shadow plant_ by Pinn about background, potted plant, palm tree, flower, and plant 13345986 1 (1).png"
              alt="Main plant"
            />
          </div>
        </div>

        <div className="bottom-row">
          <Link to="/care#water-content" className="img-container">
            <img
              src="/images/𝗩𝗮𝘁𝘁𝗻𝗮 𝗱𝗶𝗻𝗮 𝗸𝗿𝘂𝗸𝘃ä𝘅𝘁𝗲𝗿 𝗽å 𝗿ä𝘁𝘁 𝘀ä𝘁𝘁 1.png"
              alt="Watering"
            />
            <div className="hover-overlay">
              <span> Watering </span>
              <i className="fa-solid fa-cloud-showers-heavy"></i>
            </div>
          </Link>
          <Link to="/care#sun-content" className="img-container">
            <img
              src="/images/Growing Gardens in the Dark_ A Guide to Thriving Without Sunlight 1.png"
              alt="Sunlight"
            />
            <div className="hover-overlay">
              <span>Sunlight</span>
              <i className="fa-solid fa-sun-plant-wilt"></i>
            </div>
          </Link>
          <Link to="/care#nutrition-content" className="img-container">
            <img src="/images/download (1) 1.png" alt="Nutrition" />
            <div className="hover-overlay">
              <span>Nutrients</span>
              <i className="fa-solid fa-leaf"></i>
            </div>
          </Link>
        </div>
      </section>

      <div className="store-container">
        <div className="store-image">
          <img src="/images/plant shop.png" alt="Plant Shop" />
        </div>
        <div className="store-text">
          <h2 id="title">Houseplants Journey</h2>
          <div className="copy">
            <p>
              At The Sill, we believe that plants make people happy—and we’re
              here to bring that happiness straight to your doorstep. Every
              houseplant begins its journey in our carefully curated shop, where
              it’s nurtured with love, sunlight, and expert care. Once you pick
              your perfect green companion, we gently package it and send it on
              its way to you, ensuring it arrives fresh, vibrant, and ready to
              thrive in its new home. Whether you're a seasoned plant parent or
              just starting out, we're with you every step of the way—because
              bringing nature indoors should be joyful, not stressful.
            </p>

            <p>🌿 From our hands to your home, let the green journey begin.</p>

            <p>
              🌿 Why Choose Us At The Sill, we're more than just a plant store—
              we're a community rooted in growth. Every plant we sell is
              hand-picked for quality and nurtured with care, ensuring it
              thrives from the moment it reaches your doorstep. Whether you're
              filling a sunny windowsill or creating a jungle in your living
              room, we're here to help you grow green with confidence.
            </p>

            <p>
              🪴 Plant Care Made Easy We believe taking care of plants shouldn’t
              feel like a mystery. That’s why we offer simple, step-by-step care
              guides for each plant we sell. From how much sunlight it needs to
              the perfect watering schedule, we make it easy to keep your new
              leafy friend happy and healthy.
            </p>

            <p>
              📦 What to Expect When You Order Each plant is carefully wrapped
              and packaged with eco-friendly materials to keep it safe and snug
              on its way to you. We include a care card in every box, so you’re
              never left wondering what to do next. It's like unwrapping a
              little bundle of green joy—straight from our shop to your space.
            </p>

            <p>
              🌱 New to Plants? Start Here. We get it—keeping a plant alive can
              feel intimidating at first. But don’t worry, we’ve got your back!
              Check out our beginner-friendly picks, low-maintenance favorites,
              and helpful how-tos that take the guesswork out of plant
              parenting. You’ve got this—and we’ve got you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
