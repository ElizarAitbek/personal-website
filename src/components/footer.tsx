export function Footer() {
  return (
    <footer className="py-12 text-center opacity-70">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Elizar Aitbek (Chilisten). All rights
          reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://github.com/elizaraitbek"
            target="_blank"
            className="transition-opacity hover:opacity-100 opacity-70"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/elizar-aitbek"
            target="_blank"
            className="transition-opacity hover:opacity-100 opacity-70"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/chillisten/"
            target="_blank"
            className="transition-opacity hover:opacity-100 opacity-70"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
