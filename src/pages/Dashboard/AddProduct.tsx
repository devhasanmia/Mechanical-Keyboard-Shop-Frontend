
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input 
            {...register('name', { required: true })} 
            className="w-full px-3 py-2 border rounded" 
          />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea 
            {...register('description', { required: true })} 
            className="w-full px-3 py-2 border rounded" 
          />
          {errors.description && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input 
            type="number" 
            {...register('price', { required: true })} 
            className="w-full px-3 py-2 border rounded" 
          />
          {errors.price && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input 
            {...register('category', { required: true })} 
            className="w-full px-3 py-2 border rounded" 
          />
          {errors.category && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input 
            {...register('image', { required: true })} 
            className="w-full px-3 py-2 border rounded" 
          />
          {errors.image && <span className="text-red-500">This field is required</span>}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
