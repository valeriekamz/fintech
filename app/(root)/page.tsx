import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Valerie', lastName: 'Kamz', email: 'kamzalakovavaleriya@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1500.99}
          />
        </header>

        RECENT TRANSACTIONS 
      </div>

      <RightSidebar
      user={loggedIn}
      transaction={[]}
      banks={[{ currentBalance: 123.50}, { currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home