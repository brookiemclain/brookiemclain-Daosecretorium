export default function ProposalList() {
  const proposals = [
    { id: 1, title: "Fund Marketing" },
    { id: 2, title: "Upgrade Protocol" }
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Proposals</h2>
      <ul className="space-y-2">
        {proposals.map(p => (
          <li key={p.id} className="p-3 bg-indigo-50 rounded">{p.title}</li>
        ))}
      </ul>
    </div>
  )
}
