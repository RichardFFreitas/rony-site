import { Link } from "react-router-dom"
const ErrorPage = () => {
  return (
    <section className="px-4 py-32 mx-auto max-w-7xl">
  <div className="w-full mx-auto lg:w-1/3">
    <Link to="/" title="Voltar a tela inicial" className="flex items-center">
      <img src="/r.png" alt="" />
      <span className="sr-only">Rony Batista Home Page</span>
    </Link>
    <p className="mt-5 mb-3 text-xl font-bold text-white md:text-2xl">Página não encontrada (404)</p>
    <p className="mb-3 text-base font-medium text-gray-400">
    A página que você procura pode ter sido movida ou não existir mais. Volte para o nossa <Link to="/" className="underline">Página inicial</Link>, ou dê uma olhada em uma das seções abaixo.
    </p>
  </div>
</section>

  )
}

export default ErrorPage