function Start() {
  return (
   <div className=" absolute  mx-auto w-full  
              grid grid-cols-3
              items-center justify-center 
              h-30  bg-emerald-800 z-10 ">

    
    <nav className="flex justify-start gap-4 md:gap-6 font-bold ml-5 font-family: 'Inter', sans-serif;">
      <a href="#" className="text-xs sm:text-sm md:text-base text-white hover:transition-all hover:scale-110">Orçamento</a>
      <a href="#" className="text-xs sm:text-sm md:text-base text-white hover:transition-all hover:scale-110">Produtos</a>
      <a href="#" className="text-xs sm:text-sm md:text-base text-white hover:transition-all hover:scale-110">Contato</a>
    </nav>

    
   <div className="  w-auto flex justify-center gap-0 py-0 items-center ;">
    <img
      src="/img/Logo Mantiqueira.png"alt="Mantiqueira Agrícola"className="mt-15 sm:mt-0 h-12 sm:h-20 w-auto  "
    />


 <h1 className= " mt-15 sm:mt-0 text-[10px] font-semibold md:font-bold md:text-[20px] md:ml-0 text-white">Mantiqueira Agrícola</h1>
</div>

<div className=" mr-5 flex justify-end">
    <div className="relative w-24 sm:w-40 md:w-56 lg:w-64">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2
                   h-4 w-4 md:h-5 md:w-5 text-green-800"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        type="search"
        placeholder="Pesquisar"
        className="w-full pl-9 pr-3 py-1.5 md:py-2
                   text-xs sm:text-sm md:text-base
                   border-4 rounded-full border-gray-300 
                   focus:outline-none text-green-800 bg-white"
      />
    
   
  

        
      </div>
    </div>

  </div>


 
  );
}
export default Start;   