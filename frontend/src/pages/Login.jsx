// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  async function handleLogin() {

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }


    setLoading(true);
    setError("");


    try {

      const res = await fetch(
        "https://bi-sweet-backend.onrender.com/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password
          }),
        }
      );


      const data = await res.json();


      if(data.token){

        localStorage.setItem(
          "token",
          data.token
        );

        navigate("/admin");

      }
      else{

        setError(
          data.error || "Invalid credentials"
        );

      }


    } catch(error){

      console.error(error);

      setError(
        "Failed to connect to server."
      );

    }
    finally{

      setLoading(false);

    }

  }



  return (

    <div className="min-h-screen bg-gradient-to-br from-[#8B4A5A] via-[#723C4B] to-[#4A2028] flex items-center justify-center px-4">

      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full">


        <div className="text-center mb-8">

          <div className="text-5xl mb-3">
            🔐
          </div>

          <h1 className="text-3xl font-bold text-[#8B4A5A]">
            Admin Login
          </h1>

          <p className="text-gray-600 text-sm">
            Bi-Sweet Desserts Dashboard
          </p>

        </div>



        {
          error && (

            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4">

              {error}

            </div>

          )
        }



        <div className="space-y-5">


          <div>

            <label className="block mb-2 text-sm font-semibold">
              Email
            </label>


            <input

              type="email"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              className="w-full px-5 py-3 border rounded-xl"

              placeholder="admin@email.com"

            />

          </div>





          <div>

            <label className="block mb-2 text-sm font-semibold">
              Password
            </label>


            <input

              type="password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              className="w-full px-5 py-3 border rounded-xl"

              placeholder="Password"

            />

          </div>





          <button

            onClick={handleLogin}

            disabled={loading}

            className="w-full bg-[#8B4A5A] text-white py-4 rounded-xl font-semibold"

          >

            {
              loading 
              ? "Logging in..."
              : "Login"
            }


          </button>



        </div>


      </div>


    </div>

  );

}