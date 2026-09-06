import { ArrowUp } from "lucide-react";
export function Footer() {
  return (
    <footer className="section-shell footer">
      <a className="footer-name" href="#home">
        Juri Maswadi<span>.</span>
      </a>
      <p>Built with curiosity. Always a work in progress.</p>
      <a className="back-to-top" href="#home">
        Back to top <ArrowUp size={15} />
      </a>
    </footer>
  );
}
