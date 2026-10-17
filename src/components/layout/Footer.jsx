export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© {new Date().getFullYear()} Rushdi Nura · Agaro, Ethiopia</p>
        <p>
          <a href="https://github.com/RushdiNura" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:rushdinurafita@gmail.com">rushdinurafita@gmail.com</a>
          <a href="#home">Back to top</a>
        </p>
      </div>
    </footer>
  );
}
