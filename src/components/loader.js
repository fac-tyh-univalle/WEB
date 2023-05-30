export default function Loader() {
    return (
      <div className="w-full h-full inset-0 flex items-center justify-center z-50 flex-col">
        <div className="animate-spin mx-6 h-20 w-20 my-8 border-t-4 border-main-text-color rounded-full" />
        <p className="mt-2 text-2xl text-main-text-color">Cargando...</p>
      </div>
    );
  }