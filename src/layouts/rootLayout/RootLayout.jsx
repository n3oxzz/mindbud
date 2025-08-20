import { Link, Outlet } from 'react-router'
import './rootLayout.css'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <div className='rootLayout'>
        <header>
            <Link to='/' className="logo">
            <img src="mindbud-logo-light.png" alt="" width="256" height="256"/>
            <span>Mindbud</span>
            </Link>
            <div className="user">
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
    </ClerkProvider>
  )
}

export default RootLayout