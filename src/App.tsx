import { Routes, Route} from "react-router-dom";

import Layout from "~/components/layout";
import Home from "~/components/home";
import About from "~/components/about";
import Dashboard from "~/components/dashboard";
import NoMatch from "~/components/no-match";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  );
}

export default App;
