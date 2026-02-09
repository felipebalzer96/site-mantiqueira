function Intro() {
  return (
    <section className="overflow-hidden
    max-h-screen
    relative max-w-full
    bg-[url('../public/img/plantacao.png')]
    bg-cover bg-center
    flex items-center z-0 justify-center
    flex-col gap-4 md:pb-0   h-screen  
  "  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60 pointer-events-none"></div>

    <div className=" absolute mb-140 z-50 flex flex-col items-center md:mb-40 md:gap-6 "> 
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white  text-center">
       Força mecânica para quem move a pecuária
      </h1>
      <p className="text-sm md:text-2xl text-white text-center max-w-2xl z-10">
        
       Soluções completas para máquinas agrícolas .
      </p>
      </div>
     

      <div className="mt-17 z-10 pt-24 md:pt-32 max-w-7xl mx-auto px-4 md:px-6 md:mt-90">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">

    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-xl transition">
      <div className="text-green-700 text-3xl md:text-4xl mb-2 md:mb-4">🚜</div>
      <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">
        Manutenção Preventiva
      </h3>
      <p className="text-xs md:text-sm text-gray-600">
        Revisões periódicas para evitar falhas e aumentar a vida útil das máquinas.
      </p>
    </div>

    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-xl transition">
      <div className="text-green-700 text-3xl md:text-4xl mb-2 md:mb-4">🛠️</div>
      <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">
        Manutenção Corretiva
      </h3>
      <p className="text-xs md:text-sm text-gray-600">
        Diagnóstico rápido e reparos eficientes no campo ou na oficina.
      </p>
    </div>

    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-xl transition">
      <div className="text-green-700 text-3xl md:text-4xl mb-2 md:mb-4">⚙️</div>
      <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">
        Peças e Acessórios
      </h3>
      <p className="text-xs md:text-sm text-gray-600">
        Peças originais e compatíveis para garantir segurança e desempenho.
      </p>
    </div>

    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-xl transition">
      <div className="text-green-700 text-3xl md:text-4xl mb-2 md:mb-4">📞</div>
      <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">
        Atendimento Rápido
      </h3>
      <p className="text-xs md:text-sm text-gray-600">
        Suporte ágil para reduzir o tempo de máquina parada.
      </p>
    </div>

  </div>
</div>

      
    </section>
  );
}
export default Intro;