import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-500 py-8 px-6 md:px-12 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-sm">
          © {new Date().getFullYear()} Yash Khetan
        </p>

        <div className="flex items-center gap-5">
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-white transition-colors"
          >
            <FiGithub className="text-lg" />
          </a>
          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-white transition-colors"
          >
            <FiLinkedin className="text-lg" />
          </a>
          <a
            href={`mailto:${import.meta.env.VITE_GMAIL}`}
            className="text-zinc-600 hover:text-white transition-colors"
          >
            <FiMail className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
