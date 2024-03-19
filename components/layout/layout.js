import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  );
};