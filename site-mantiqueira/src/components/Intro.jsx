function Intro() {
  return (
    <section className="
    relative max-w-full
    bg-[url('../public/img/plantacao.png')]
    bg-cover bg-center
    flex items-center z-0 justify-center
    flex-col gap-4 md:pb-0   h-screen  
  "  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60 pointer-events-none"></div>

    
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white z-10 text-center">
       Força mecânica para quem move a pecuária
      </h1>
      <p className="text-sm md:text-2xl text-white text-center max-w-2xl z-10">
        
       Soluções completas para máquinas agrícolas .
      </p>

      <div className="  z-10 pt-30   max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15">

      
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="text-green-700 text-4xl mb-4">🚜</div>
        <h3 className="font-bold text-lg mb-2">
          Manutenção Preventiva
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Revisões periódicas para evitar falhas e aumentar a vida útil das máquinas.
        </p>
        
      </div>

      
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="text-green-700 text-4xl mb-4">🛠️</div>
        <h3 className="font-bold text-lg mb-2">
          Manutenção Corretiva
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Diagnóstico rápido e reparos eficientes no campo ou na oficina.
        </p>
        
      </div>

     
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="text-green-700 text-4xl mb-4">⚙️</div>
        <h3 className="font-bold text-lg mb-2">
          Peças e Acessórios
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Peças originais e compatíveis para garantir segurança e desempenho.
        </p>
        
      </div>

      
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="text-green-700 text-4xl mb-4">📞</div>
        <h3 className="font-bold text-lg mb-2">
          Atendimento Rápido
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Suporte ágil para reduzir o tempo de máquina parada.
        </p>
        
      </div>

    </div>
  </div>

      
    </section>
  );
}
export default Intro;