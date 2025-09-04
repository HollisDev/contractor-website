export function AboutUs() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-none mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div>
            <p className="text-gray-800 text-2xl mb-6 uppercase">
              A trusted design & build company in Modesto
            </p>
            <h2 className="text-burgundy text-5xl lg:text-5xl leading-tight uppercase">
              Where craftsmanship & design meet innovation
            </h2>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-gray-800 text-lg leading-relaxed">
              With over 20 years of experience, COOPER Design Build transforms Central Valley-area homes into deeply personal, beautifully livable spaces. Our full-service team guides you seamlessly from first sketch to final reveal, so you can enjoy the process as much as the outcome.
            </p>
            
            <p className="text-gray-800 text-md leading-relaxed">
              Whether you're reimagining your kitchen, restoring a home, or investing in a whole home transformation, we bring creative vision, quiet luxury, and uncompromising craftsmanship to every detail.
            </p>

            <p className="text-gray-800 text-md leading-relaxed font-medium">
              This is remodeling, elevated. Designed to reflect your lifestyle, your values, and your future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
