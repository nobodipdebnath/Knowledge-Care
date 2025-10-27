import profile from '../../assets/images/profile.png'
export const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 mx-auto max-w-7xl border-b-2 border-gray-300 '>
        <h1 className="text-[40px] font-bold text-[#111111]">Knowledge Cafe</h1>
        <img src={profile} alt="" />
    </header>
  )
}
