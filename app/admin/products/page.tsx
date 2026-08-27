"use client";
import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";

type Product = {
  id: string;
  name: string;
  category: string;
  sku: string;
  price: string;
  weight: string;
  stock: string;
  image: string;
  description: string;
  status: "Active" | "Draft";
};

const initialProducts: Product[] = [
  {
    id: "prod-1",
    name: "Heritage Sella Basmati",
    category: "Basmati",
    sku: "HRC-BAS-SEL-01",
    price: "PKR 2,450",
    weight: "5 KG",
    stock: "1,200 units",
    image: "",
    description: "Premium aged sella basmati, extra-long grain, golden hue.",
    status: "Active",
  },
  {
    id: "prod-2",
    name: "Terrace Reserve White Basmati",
    category: "Export",
    sku: "HRC-BAS-WHT-02",
    price: "PKR 3,100",
    weight: "10 KG",
    stock: "420 units",
    image: "",
    description: "Export-grade double-milled white basmati for premium retail.",
    status: "Active",
  },
];

const emptyForm = {
  name: "",
  category: "Basmati",
  sku: "",
  price: "",
  weight: "",
  stock: "",
  image: "",
  description: "",
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [toast, setToast] = useState<string | null>(null);

  const notify = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const updateField = (field: keyof typeof emptyForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const resetAndClose = () => {
    setForm(emptyForm);
    setShowModal(false);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.price.trim()) {
      notify("Product name and price are required.");
      return;
    }
    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      ...form,
      status: "Draft",
    };
    setProducts((prev) => [newProduct, ...prev]);
    notify(`${form.name} added as a draft.`);
    resetAndClose();
  };

  // Replace removeProduct with a confirm-gated version:
const handleRemove = (id: string, name: string) => {
  if (window.confirm(`Remove ${name} from the catalog? This can't be undone.`)) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    notify(`${name} removed.`);
  }
};

  const toggleStatus = (id: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: p.status === "Active" ? "Draft" : "Active" } : p
      )
    );
  };

  return (
    <div className="flex bg-background min-h-screen">
      <AdminSidebar />
      <main className="flex-1 md:ml-64 min-h-screen pt-16 md:pt-0">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-container-highest/40 pb-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-primary-container mb-2">Products</h1>
              <p className="text-sm text-primary-container/70 max-w-2xl">Manage the product catalog shown on the storefront — add new listings, edit stock, and control visibility.</p>
            </div>
<button
  onClick={() => setShowModal(true)}
  className="bg-primary-container text-background rounded-full px-6 py-3 text-xs uppercase tracking-widest hover:bg-primary-container/90 transition-colors w-fit"
>
  Add Product
</button>
          </div>

          <div className="bg-surface-container-lowest border border-surface-container-highest/40 rounded-xl overflow-hidden">
            {products.length === 0 ? (
              <p className="text-center text-primary-container/50 py-24">No products yet — add your first one to get started.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-surface-container-highest/50 bg-surface-container-highest/10">
                      {["Product", "Category", "SKU", "Price", "Weight", "Stock", "Status", "Actions"].map((h) => (
                        <th key={h} className="p-4 text-xs uppercase tracking-widest text-primary-container">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p.id} className="border-b border-surface-container-highest/30 hover:bg-surface-container-highest/10 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-highest/30 flex items-center justify-center border border-surface-container-highest/40 overflow-hidden shrink-0">
                              {p.image ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                              ) : (
                                <span className="material-symbols-outlined text-primary-container/40 text-[18px]">grain</span>
                              )}
                            </div>
                            <div>
                              <p className="text-primary-container font-medium">{p.name}</p>
                              <p className="text-primary-container/50 text-xs line-clamp-1 max-w-[220px]">{p.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-primary-container/70">{p.category}</td>
                        <td className="p-4 text-primary-container/70">{p.sku || "—"}</td>
                        <td className="p-4 text-primary-container">{p.price}</td>
                        <td className="p-4 text-primary-container/70">{p.weight || "—"}</td>
                        <td className="p-4 text-primary-container/70">{p.stock || "—"}</td>
                        <td className="p-4">
                          <button
                            onClick={() => toggleStatus(p.id)}
                            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                              p.status === "Active"
                                ? "bg-primary-container/10 text-primary-container border-primary-container/30"
                                : "bg-surface-container-highest/40 text-primary-container/60 border-surface-container-highest"
                            }`}
                          >
                            {p.status}
                          </button>
                        </td>
                        <td className="p-4 text-right">
                          // And update the Remove button in the table to call it:
<button
  onClick={() => handleRemove(p.id, p.name)}
  className="text-red-600 hover:text-red-800 text-xs underline underline-offset-2"
>
  Remove
</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-6">
          <div className="bg-surface-container-lowest rounded-xl border border-surface-container-highest/40 w-full max-w-lg max-h-[90vh] overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-xl text-primary-container">Add Product</h3>
              <button onClick={resetAndClose} className="text-primary-container/50 hover:text-primary-container">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleAddProduct}>
              <div>
                <label className="block text-xs uppercase tracking-widest text-primary-container mb-2">Product Name *</label>
                <input
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full border border-surface-container-highest rounded-lg bg-background px-4 py-3 text-sm text-primary-container focus:outline-none focus:border-primary-container"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-primary-container mb-2">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => updateField("category", e.target.value)}
                    className="w-full border border-surface-container-highest rounded-lg bg-background px-4 py-3 text-sm text-primary-container focus:outline-none focus:border-primary-container"
                  >
                    <option>Basmati</option>
                    <option>Sella</option>
                    <option>Export</option>
                    <option>Retail</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-primary-container mb-2">SKU</label>
                  <input
                    value={form.sku}
                    onChange={(e) => updateField("sku", e.target.value)}
                    className="w-full border border-surface-container-highest rounded-lg bg-background px-4 py-3 text-sm text-primary-container focus:outline-none focus:border-primary-container"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-primary-container mb-2">Price *</label>
                  <input
                    value={form.price}
                    onChange={(e) => updateField("price", e.target.value)}
                    placeholder="PKR 2,450"
                    className="w-full border border-surface-container-highest rounded-lg bg-background px-4 py-3 text-sm text-primary-container focus:outline-none focus:border-primary-container"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-primary-container mb-2">Weight / Package</label>
                  <input
                    value={form.weight}
                    onChange={(e) => updateField("weight", e.target.value)}
                    placeholder="5 KG"
                    className="w-full border border-surface-container-highest rounded-lg bg-background px-4 py-3 text-sm text-primary-container focus:outline-none focus:border-primary-container"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-primary-container mb-2">Stock Quantity</label>
                <input
                  value={form.stock}
                  onChange={(e) => updateField("stock", e.target.value)}
                  placeholder="1,200 units"
                  className="w-full border border-surface-container-highest rounded-lg bg-background px-4 py-3 text-sm text-primary-container focus:outline-none focus:border-primary-container"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-primary-container mb-2">Image URL</label>
                <input
                  value={form.image}
                  onChange={(e) => updateField("image", e.target.value)}
                  placeholder="https://..."
                  className="w-full border border-surface-container-highest rounded-lg bg-background px-4 py-3 text-sm text-primary-container focus:outline-none focus:border-primary-container"
                />
                <p className="text-xs text-primary-container/50 mt-1">Demo only — real upload needs backend/storage later.</p>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-primary-container mb-2">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  rows={3}
                  className="w-full border border-surface-container-highest rounded-lg bg-background px-4 py-3 text-sm text-primary-container focus:outline-none focus:border-primary-container resize-none"
                />
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="flex-1 border border-primary-container text-primary-container text-xs uppercase tracking-widest py-3 px-4 rounded-full hover:bg-surface-container-highest/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-container text-background text-xs uppercase tracking-widest py-3 px-4 rounded-full hover:bg-primary-container/90 transition-colors"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-8 right-8 bg-primary-container text-background px-6 py-4 rounded-xl shadow-luxury text-sm z-50">
          {toast}
        </div>
      )}
    </div>
  );
}