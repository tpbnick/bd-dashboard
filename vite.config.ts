import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import gitCommitInfo from 'git-commit-info'

const gitInfo = gitCommitInfo()

export default defineConfig({
  plugins: [react()],
  base: '/bd-dashboard/',
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: 'http://localhost:5173',
  },
  define: {
    __GIT_COMMIT_HASH__: JSON.stringify(gitInfo?.shortHash || 'unknown'),
    __GIT_COMMIT_DATE__: JSON.stringify(gitInfo?.date || new Date().toISOString()),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
})