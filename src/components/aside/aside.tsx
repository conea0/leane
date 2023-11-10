import { Logo } from "@/components/aside/logo/logo";
import { Sidebar } from "@/components/aside/sidebar/sidebar";
import AsideStyle from '../aside/aside.module.css';
import SidebarStyle from '../aside/sidebar/sidebar.module.css';
import AccountImage from '/public/images/account-w.svg';
import SchoolImag from '/public/images/school-w.svg';
import SettingImage from '/public/images/settings-w.svg';
import CodeImage from '/public/images/terminal-w.svg';
import ProblemImage from '/public/images/view_list-w.svg';
export const Aside = () => {
    const sidebar = [
        {
            path: SchoolImag,
            h3: "コース",
        },
        {
            path: SettingImage,
            h3: "設定",
        },
        {
            path: AccountImage,
            h3: "アカウント",
        },
        {
            path: ProblemImage,
            h3: "問題一覧",
        },
    ]
    return (
        <aside className={AsideStyle.aside}>
            <Logo />
            <Sidebar sidebar={sidebar} />
        </aside>
    )
}
