import Header from './components/Header'

export default ({
  children,
  params
}: {
  children: React.ReactNode
  params: { slug: string }
}) => {
  return (
    <main>
      <Header name={params.slug} />
      {/* HEADER */} {/* DESCRIPTION PORTION */}
      <div className='flex items-start justify-between w-2/3 m-auto text-black 0 -mt-11'>
        {children}
      </div>
    </main>
  )
}
