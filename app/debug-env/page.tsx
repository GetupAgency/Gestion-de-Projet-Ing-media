export default function DebugEnvPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Debug Environment Variables</h1>
      
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <p className="font-semibold">NEXT_PUBLIC_SUPABASE_URL:</p>
          <p className="text-sm text-gray-600 font-mono bg-gray-100 p-2 rounded">
            {supabaseUrl || '❌ NON DÉFINI'}
          </p>
        </div>
        
        <div>
          <p className="font-semibold">NEXT_PUBLIC_SUPABASE_ANON_KEY:</p>
          <p className="text-sm text-gray-600 font-mono bg-gray-100 p-2 rounded break-all">
            {supabaseKey ? `${supabaseKey.substring(0, 50)}...` : '❌ NON DÉFINI'}
          </p>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded">
          <p className="text-sm text-blue-900">
            {supabaseUrl && supabaseKey ? (
              '✅ Supabase est configuré !'
            ) : (
              '❌ Variables manquantes. Vérifie Vercel Environment Variables et redéploie.'
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

