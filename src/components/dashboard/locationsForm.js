import { Field, Form, useFormik } from "formik";
import PocketBaseService from "@/services/pocketbaseService";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Notify } from "notiflix";

const MapWithNoSSR = dynamic(() => import("../form/MapComponent"), {
    ssr: false,
})

export default function LocationsForm({ location, onSubmit, user, setCurrentContent  }) { 
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => { 
            const categories = await PocketBaseService.getAll('category')
            setCategories(categories)
        })()
    },[])

    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            longitude: null,
            latitude: null,
            description: '',
            city_id: 'g5vo0kps2zc0la1',
            category_id: '-1',
            user_id: user.userData.id,
            photos: [],
            status: 'active'
        },
        onSubmit: async (values) => {
            try {
                setLoading(true)
                values.name = values.name.trim()
                values.address = values.address.trim()
                values.description = values.description.trim()
                
                if (values.name.length === 0) throw new Error('El nombre es requerido')
                if (values.address.length === 0) throw new Error('La direccion es requerida')
                if (values.description.length === 0) throw new Error('La descripcion es requerida')
                if (values.category_id.length === 0 && values.category_id === '-1') throw new Error('La categoria es requerida')
                console.log(values.photos)
                // verify that the user has uploaded at least one photo (.jpg, .jpeg, .png)
                if (values.photos.length === 0) throw new Error('Debe subir al menos una foto')
                // verify that the user has uploaded at least one photo (.jpg, .jpeg, .png)
                if (values.photos.length > 20) throw new Error('Solo puede subir hasta 20 recursos')
                // verify that the user has uploaded at least one photo (.jpg, .jpeg, .png)
                if (values.photos.filter(photo => photo.type == 'image/jpeg' && photo.type == 'image/png').length == 0) throw new Error('Debe subir al menos una foto en formato .jpg o .png')
                if (values.longitude === null || values.latitude === null) throw new Error('Debe seleccionar una ubicacion en el mapa')

                const data = new FormData()
                data.append('name', values.name)
                data.append('address', values.address)
                data.append('longitude', values.longitude)
                data.append('latitude', values.latitude)
                data.append('description', values.description)
                data.append('city_id', values.city_id)
                data.append('category_id', values.category_id)
                data.append('user_id', values.user_id)
                data.append('status', values.status)
                
                for (let i = 0; i < values.photos.length; i++) {
                    const file = values.photos[i];
                    data.append('photos', file)
                }
                console.log(values)
                const createdRecord = await PocketBaseService.createItem('location', data);
                Notify.success('Ubicacion agregada.')

                setCurrentContent(0)

            } catch (e) { 
                console.log(e)
                Notify.failure(e.message)
            } finally {
                setLoading(false)
            }

        },
      });
    
      return (
          <form onSubmit={formik.handleSubmit} className="locations-form flex flex-col p-8 space-y-6 bg-input-bg-color text-main-text-color rounded-lg">
            <h1 className="text-2xl font-bold text-center">Agregar nueva ubicacion</h1>
            <input className="w-full p-2 bg-main-bg-color text-main-text-color border border-main-text-color" type="text" name="name" placeholder="Nombre" onChange={formik.handleChange} value={formik.values.name} />
            <input className="w-full p-2 bg-main-bg-color text-main-text-color border border-main-text-color" type="text" name="address" placeholder="Direccion" onChange={formik.handleChange} value={formik.values.address} />
                <select className="w-full rounded p-2 bg-main-bg-color text-main-text-color border border-main-text-color" name="category_id" onChange={formik.handleChange} value={formik.values.category_id}>    
                    <option value="-1" disabled>Seleccionar categoria</option>
                    {categories && categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}
                        >{category.name}</option>
                    ))}
                </select>

                <div>
                    <label htmlFor="photos">Fotografias y Videos</label>
                    <FileInput name="photos" formik={formik} className="block w-full mt-1" />
                    {formik.touched.photos && formik.errors.photos ? (
                    <div className="text-red-500">{formik.errors.photos}</div>
                    ) : null}
                </div>
                {
                    formik.values.photos.length > 0 && (
                        <div className="flex flex-wrap h-[20%] bg-main-bg-color overflow-auto border border-main-text-color rounded-lg">
                        {formik.values.photos.map((file, index) => {
                            const url = URL.createObjectURL(file);

                            const handleDelete = () => {
                            const newFiles = [...formik.values.photos];
                            newFiles.splice(index, 1);
                            formik.setFieldValue('photos', newFiles);
                            };

                            return (
                            <div key={index} className="relative m-1">
                                {file.type.startsWith('image') ? (
                                <img
                                    src={url}
                                    alt="Selected"
                                    className="h-24 w-40 object-cover border border-secondary-text-color"
                                />
                                ) : file.type.startsWith('video') ? (
                                <video
                                    src={url}
                                    controls
                                    className="h-24 w-40 object-cover border border-secondary-text-color"
                                />
                                ) : (
                                <audio
                                    src={url}
                                    controls
                                    className="h-24 w-40 object-cover border border-secondary-text-color"
                                />
                                )}
                                <button
                                onClick={handleDelete}
                                className="absolute top-0 right-0 bg-main-bg-color text-main-text-color rounded-full w-6 h-6 flex items-center justify-center"
                                >
                                x
                                </button>
                            </div>
                            );
                        })}
                        </div>
                    )
                }
              <div className=" w-full p-2 bg-main-bg-color text-main-text-color border rounded border-main-text-color">
                <MapWithNoSSR formik={formik} />
              </div>
            <textarea className="w-full rounded p-2 bg-main-bg-color text-main-text-color border border-main-text-color" type="text" name="description" placeholder="Descripcion" onChange={formik.handleChange} value={formik.values.description}></textarea>
            {/* Similar inputs for city_id and category_id */}
              <button type="submit"  disabled={loading} className="p-2 bg-secondary-text-color text-main-text-color hover:bg-main-text-color hover:text-secondary-text-color transition duration-200">
                  {loading ? 'Cargando...' : 'Agregar Ubicacion'}
              </button>
        </form>
      );
}

const FileInput = ({ name, formik }) => {
    const handleChange = (event) => {
      const files = Array.from(event.currentTarget.files);
      formik.setFieldValue(name, [...formik.values.photos, ...files]);
    };
  
    return (
      <input
        className="w-full p-2 bg-main-bg-color text-main-text-color border border-main-text-color"
        type="file"
        onChange={handleChange}
        multiple
        accept="image/*,video/*,audio/*" 
      />
    );
  };
  