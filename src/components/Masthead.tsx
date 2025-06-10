
interface MastheadProps {
  title: string
  subtitle: string
  backgroundImage: string
}

const Masthead = ({ title, subtitle, backgroundImage }: MastheadProps) => {
  return (
    <div 
      className="masthead"
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="masthead-content">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl font-light">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default Masthead
