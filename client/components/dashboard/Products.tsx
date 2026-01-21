import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Search, Filter, Edit2, Trash2, Plus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  status: "in-stock" | "out-stock" | "limited";
  image: string;
  category: string;
}

export default function Products() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null as File | null,
    availableForSale: true
  });

  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Blue Summer Dress",
      price: 15000,
      status: "in-stock",
      image: "https://via.placeholder.com/250x300?text=Blue+Dress",
      category: "Fashion"
    },
    {
      id: 2,
      name: "Red Heels",
      price: 12500,
      status: "in-stock",
      image: "https://via.placeholder.com/250x300?text=Red+Heels",
      category: "Fashion"
    },
    {
      id: 3,
      name: "Designer Handbag",
      price: 25000,
      status: "limited",
      image: "https://via.placeholder.com/250x300?text=Handbag",
      category: "Accessories"
    },
    {
      id: 4,
      name: "Sunglasses",
      price: 8000,
      status: "out-stock",
      image: "https://via.placeholder.com/250x300?text=Sunglasses",
      category: "Accessories"
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleAddProduct = () => {
    setShowModal(false);
    setFormData({ name: "", description: "", price: "", image: null, availableForSale: true });
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "in-stock": return "bg-green-100 text-green-700 border-green-300";
      case "limited": return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "out-stock": return "bg-gray-100 text-gray-700 border-gray-300";
      default: return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case "in-stock": return "In Stock";
      case "limited": return "Low Stock";
      case "out-stock": return "Out Stock";
      default: return status;
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Products</h1>
          <p className="text-muted-foreground">Manage your product catalog</p>
        </div>
        <Button 
          onClick={() => setShowModal(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex-1 flex items-center gap-2 bg-white border border-border rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input 
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-0 outline-none bg-transparent flex-1 text-sm"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all">
            {/* Image */}
            <div className="relative h-48 bg-gray-200 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
              <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(product.status)}`}>
                {getStatusLabel(product.status)}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-sm mb-1">{product.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">Elegant and comfortable perfect for summer</p>
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold text-lg">₦{product.price.toLocaleString()}</div>
                <div className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  product.status === "in-stock" ? "text-green-600" : 
                  product.status === "limited" ? "text-yellow-600" : "text-gray-600"
                }`}>
                  {product.status === "in-stock" ? "In Stock" : 
                   product.status === "limited" ? "Low Stock" : "Out Stock"}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 gap-1"
                >
                  <Edit2 className="w-3 h-3" />
                  Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 gap-1 text-red-600 border-red-300 hover:bg-red-50"
                >
                  <Trash2 className="w-3 h-3" />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Add New Product</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-secondary rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Product Name</label>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Blue Summer Dress"
                  className="bg-secondary/30 border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your product"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-secondary/30 text-sm resize-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Price</label>
                <Input 
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="e.g. 15000"
                  className="bg-secondary/30 border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Product Image</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all cursor-pointer">
                  <input 
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                    id="imageInput"
                  />
                  <label htmlFor="imageInput" className="cursor-pointer">
                    <div className="text-2xl mb-2">+</div>
                    <p className="text-xs text-muted-foreground">
                      Click to upload or drag and drop<br />
                      PNG, JPG or GIF
                    </p>
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input 
                  type="checkbox"
                  id="availableForSale"
                  checked={formData.availableForSale}
                  onChange={(e) => setFormData(prev => ({ ...prev, availableForSale: e.target.checked }))}
                  className="w-4 h-4"
                />
                <label htmlFor="availableForSale" className="text-sm">
                  Available for sale
                </label>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <Button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  type="button"
                  onClick={handleAddProduct}
                  className="flex-1 bg-primary/90 text-primary-foreground hover:bg-primary"
                >
                  Add Product
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
