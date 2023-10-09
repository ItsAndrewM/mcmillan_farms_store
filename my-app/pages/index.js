import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/ui/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Layout>This is the store mcmillan farms</Layout>;
}
