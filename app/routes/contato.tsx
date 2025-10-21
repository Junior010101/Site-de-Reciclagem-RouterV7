import { useState } from "react";
import type { Route } from "./+types/contato";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contato | Reciclagem Consciente" },
    { name: "description", content: "Envie sua mensagem para nossa equipe." },
  ];
}

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Mensagem enviada! (Simulação, sem backend)");
    setForm({ nome: "", email: "", mensagem: "" });
  }

  return (
    <main className="p-6 max-w-3xl mx-auto min-h-screen w-screen flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-6">Fale Conosco</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="mensagem"
          placeholder="Sua mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
          className="border p-2 rounded h-32 resize-none"
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
