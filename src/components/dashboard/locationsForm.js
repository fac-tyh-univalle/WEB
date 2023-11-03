import { Field, Form, useFormik } from "formik";
import PocketBaseService from "@/services/pocketbaseService";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Notify } from "notiflix";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const MapWithNoSSR = dynamic(() => import("../form/MapComponent"), {
    ssr: false,
})

export default function LocationsForm({ location, user, setCurrentContent, categories, setCurrentLocation  }) { 
    const [loading, setLoading] = useState(false)
    const isEditing = location != null

    const formik = useFormik({
        initialValues: {
            name: isEditing ? location.name : '',
            address: isEditing ? location.address : '',
            longitude: isEditing ? location.longitude : null,
            latitude: isEditing ? location.latitude : null,
            description: isEditing ? location.description : '',
            city_id: isEditing ? location.city_id : 'o6h4l0zmrj1635k',
            category_id: isEditing ? location.category_id[0] : '-1',
            user_id: user.userData.id,
            photos: isEditing ? location.photos : [],
            status: isEditing ? location.status : 'active'
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
                // verify that the user has uploaded at least one photo (.jpg, .jpeg, .png)
                if (values.photos.length === 0) throw new Error('Debe subir al menos una foto')
                // verify that the user has uploaded at least one photo (.jpg, .jpeg, .png)
                if (values.photos.length > 20) throw new Error('Solo puede subir hasta 20 recursos')
                // verify that the user has uploaded at least one photo (.jpg, .jpeg, .png)
                if (!isEditing && values.photos.filter(photo => photo.type == 'image/jpeg' || photo.type == 'image/png').length == 0) throw new Error('Debe subir al menos una foto en formato .jpg o .png')
                // verify that the user has uploaded at least one photo (.jpg, .jpeg, .png)

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
                let createdRecord;
                if (isEditing) { 
                    createdRecord = await PocketBaseService.updateItem('location', location.id, data)
                    Notify.success('Ubicacion actualizada.')
                    setCurrentLocation(null)
                } else {
                    createdRecord = await PocketBaseService.createItem('location', data)
                    Notify.success('Ubicacion agregada.')
                }
                setCurrentContent(0)
            } catch (e) { 
                console.log(e)
                Notify.failure(e.message)
            } finally {
                setLoading(false)
            }

        },
    });
        
        function getTypeFromExtension(filename) {
            const ext = filename.split('.').pop().toLowerCase();
            switch (ext) {
                case 'jpg':
                case 'jpeg':
                case 'png':
                    return 'image/jpeg';
                case 'mp4':
                    return 'video/mp4';
                case 'mp3':
                    return 'audio/mp3';
                default:
                    return '';
            }
        }
    
      return (
          <form onSubmit={formik.handleSubmit} className="locations-form flex flex-col p-8 space-y-6 bg-input-bg-color text-main-text-color rounded-lg">
            <div className="flex items-center justify-between">
                {isEditing && (
                    <button 
                        className="p-2 bg-secondary-text-color w-10 text-main-text-color hover:bg-main-text-color hover:text-secondary-text-color transition duration-200 flex items-center"
                        onClick={() => setCurrentContent(0)}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                )}
                <h1 className="text-2xl w-50 font-bold">{isEditing ? 'Detalles de ubicacion' : 'Agregar nueva ubicacion'}</h1>
                
            </div>
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
                    formik.values.photos?.length > 0 && (
                        <div className="flex flex-wrap h-[20%] bg-main-bg-color overflow-auto border border-main-text-color rounded-lg">
                        {formik.values.photos.map((file, index) => {
                            let url;
                            let type;
                            if (typeof file === 'string' && isEditing && location != null) {
                                // If it's a string, then it's a URL of an already uploaded file
                                url = `https://boring-carpenter.pockethost.io/api/files/somsequ5ehmdtsh/${location?.id}/${file}`;
                                type = getTypeFromExtension(file);
                            } else if (file instanceof File) {
                                // If it's a File object, create an object URL
                                url = URL.createObjectURL(file);
                                type = file.type;
                            }

                            const handleDelete = () => {
                                const newFiles = [...formik.values.photos];
                                newFiles.splice(index, 1);
                                formik.setFieldValue('photos', newFiles);
                            };

                            return (
                            <div key={index} className="relative m-1">
                                {type.startsWith('image') ? (
                                <img
                                    src={url}
                                    alt="Selected"
                                    className="h-24 w-40 object-cover border border-secondary-text-color"
                                />
                                ) : type.startsWith('video') ? (
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
                  {loading ? 'Cargando...' : isEditing ? 'Editar detalles de ubicacion' : 'Agregar Ubicacion'}
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
  