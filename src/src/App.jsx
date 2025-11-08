import { useState } from 'react'
import CreatorList from './components/CreatorList'
import ProposalList from './components/ProposalList'
import RevenueSplitDialog from './components/RevenueSplitDialog'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [showRevenueDialog, setShowRevenueDialog] = useState(false)

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-indigo-600 text-white p-6">
          <h1 className="text-3xl font-bold">DAO Secretorum</h1>
        </header>

        <main className="container mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CreatorList />
            <ProposalList />
          </div>

          <button
            onClick={() => setShowRevenueDialog(true)}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Open Revenue Split
          </button>
        </main>

        <RevenueSplitDialog
          open={showRevenueDialog}
          onClose={() => setShowRevenueDialog(false)}
        />
      </div>
    </ErrorBoundary>
  )
}

export default App
