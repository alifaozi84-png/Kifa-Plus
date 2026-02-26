
import React from "react";
import "./App.css";

function App() {
  const showContact = (e) => {
    if (window.confirm("قم بدفع 0.5 Pi لإظهار رقم التواصل؟")) {
      const contact = e.target.nextElementSibling;
      contact.style.display = "block";
      e.target.style.display = "none";
    }
  };

  const showSection = (id) => {
    document.querySelectorAll(".section").forEach((sec) => (sec.style.display = "none"));
    document.getElementById(id).style.display = "block";
  };

  return (
    <div>
      <header style={{ background: "#6a1b9a", color: "white", padding: "15px", textAlign: "center", fontSize: "20px" }}>
        KIFA Demo App
      </header>

      <nav style={{ display: "flex", justifyContent: "space-around", background: "#9c27b0", padding: "10px" }}>
        <button onClick={() => showSection("producers")}>الأسر المنتجة</button>
        <button onClick={() => showSection("furniture")}>تبرع أثاث</button>
        <button onClick={() => showSection("restaurants")}>المطاعم</button>
        <button onClick={() => showSection("beneficiaries")}>المستفيد</button>
      </nav>

      <section id="producers" className="section" style={{ display: "none", padding: "15px" }}>
        <div className="item">
          <h3>Handmade Cookies</h3>
          <p>Organic ingredients, freshly baked.</p>
          <p>Price: 5 Pi</p>
          <button onClick={() => alert("محاكاة شراء المنتج")}>شراء</button>
        </div>
        <div className="item">
          <h3>Knitted Scarf</h3>
          <p>Warm and handmade scarf.</p>
          <p>Price: 3 Pi</p>
          <button onClick={() => alert("محاكاة شراء المنتج")}>شراء</button>
        </div>
      </section>

      <section id="furniture" className="section" style={{ display: "none", padding: "15px" }}>
        <div className="item">
          <h3>Wooden Chair</h3>
          <p>Good condition, pickup after payment.</p>
          <p>Price: 0.5 Pi</p>
          <button onClick={showContact}>اظهار رقم التواصل بعد الدفع</button>
          <p className="contact" style={{ display: "none" }}>رقم التواصل: 0501234567</p>
        </div>
        <div className="item">
          <h3>Coffee Table</h3>
          <p>Pre-owned, must pickup after payment.</p>
          <p>Price: 0.5 Pi</p>
          <button onClick={showContact}>اظهار رقم التواصل بعد الدفع</button>
          <p className="contact" style={{ display: "none" }}>رقم التواصل: 0509876543</p>
        </div>
      </section>

      <section id="restaurants" className="section" style={{ display: "none", padding: "15px" }}>
        <div className="item">
          <h3>Pizza Palace</h3>
          <p>Delicious pizzas for delivery or pickup.</p>
        </div>
        <div className="item">
          <h3>Healthy Bites</h3>
          <p>Organic salads and sandwiches.</p>
        </div>
      </section>

      <section id="beneficiaries" className="section" style={{ display: "none", padding: "15px" }}>
        <div className="item">
          <h3>Available Products</h3>
          <p>يمكن للمستفيد تصفح جميع منتجات الأسر المنتجة والمطاعم.</p>
          <p>سيظهر رقم التواصل للأثاث بعد الضغط على زر الدفع.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
