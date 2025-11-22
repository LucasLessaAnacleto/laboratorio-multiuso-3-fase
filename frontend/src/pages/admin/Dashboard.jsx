import { Header } from "../../components/admin/Header.jsx";
import { Sidebar } from "../../components/admin/Sidebar.jsx";

export function Dashboard() {
    document.title = 'ADM Dashboard - Laboratório Multiuso';
    return (
        <div id="page-admin">
            <Header />
            <main className="main">
                <Sidebar />
            </main>
        </div>
    )
}