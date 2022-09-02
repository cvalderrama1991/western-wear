const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className="bg-amber-900 text-yellow-300 w-full flex items-center justify-center h-12">
      <p>&copy; {footerYear} Western Wear</p>
    </footer>
  )
}

export default Footer
