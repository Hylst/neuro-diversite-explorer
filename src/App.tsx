
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthProvider";
import { ROUTES } from "./routes";

// Layout principal
import MainLayout from "./layouts/MainLayout";

// Chargement paresseux des composants
const Index = lazy(() => import("./pages/Index"));
const Comprendre = lazy(() => import("./pages/Comprendre"));
const Cerveau = lazy(() => import("./pages/Cerveau"));
const Troubles = lazy(() => import("./pages/Troubles"));
const TroublesDys = lazy(() => import("./pages/troubles/TroublesDys"));
const Dyslexie = lazy(() => import("./pages/troubles/Dyslexie"));
const Dysphasie = lazy(() => import("./pages/troubles/Dysphasie"));
const Dysorthographie = lazy(() => import("./pages/troubles/Dysorthographie"));
const Dysgraphie = lazy(() => import("./pages/troubles/Dysgraphie"));
const TDAH = lazy(() => import("./pages/troubles/TDAH"));
const Autisme = lazy(() => import("./pages/troubles/Autisme"));
const AutismeDetail = lazy(() => import("./pages/troubles/AutismeDetail"));
const TSA = lazy(() => import("./pages/troubles/TSA"));
const Dyspraxie = lazy(() => import("./pages/troubles/Dyspraxie"));
const Dyscalculie = lazy(() => import("./pages/troubles/Dyscalculie"));
const Neurodegeneratifs = lazy(() => import("./pages/troubles/Neurodegeneratifs"));
const PostTraumatiques = lazy(() => import("./pages/troubles/PostTraumatiques"));
const LesionsCerebrales = lazy(() => import("./pages/troubles/LesionsCerebrales"));
const Communaute = lazy(() => import("./pages/Communaute"));
const Ressources = lazy(() => import("./pages/Ressources"));
const ReflexionStructuree = lazy(() => import("./pages/ressources/ReflexionStructuree"));
const PenseeEnEbullition = lazy(() => import("./pages/ressources/PenseeEnEbullition"));
const GuideAdministratif = lazy(() => import("./pages/ressources/GuideAdministratif"));
const StrategiesApprentissage = lazy(() => import("./pages/ressources/StrategiesApprentissage"));
const Communication = lazy(() => import("./pages/ressources/Communication"));
const Applications = lazy(() => import("./pages/ressources/Applications"));
const Plannings = lazy(() => import("./pages/ressources/Plannings"));
const Kits = lazy(() => import("./pages/ressources/Kits"));
const VivreAvec = lazy(() => import("./pages/VivreAvec"));
const AutoEvaluation = lazy(() => import("./pages/AutoEvaluation"));
const Recherche = lazy(() => import("./pages/Recherche"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const BlogArticleImport = lazy(() => import("./pages/BlogArticleImport"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const APropos = lazy(() => import("./pages/APropos"));
const Glossaire = lazy(() => import("./pages/Glossaire"));
const Apprentissage = lazy(() => import("./pages/Apprentissage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Composant de chargement
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neuro-purple"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Toutes les routes avec le layout principal */}
              <Route element={<MainLayout />}>
                {/* Route d'accueil */}
                <Route path={ROUTES.HOME} element={<Index />} />
                {/* Section Comprendre */}
                <Route path={ROUTES.COMPRENDRE} element={<Comprendre />} />
                <Route path={ROUTES.CERVEAU} element={<Cerveau />} />
                
                {/* Section Troubles */}
                <Route path={ROUTES.TROUBLES.INDEX} element={<Troubles />} />
                <Route path={ROUTES.TROUBLES.DYS} element={<TroublesDys />} />
                <Route path={ROUTES.TROUBLES.DYSLEXIE} element={<Dyslexie />} />
                <Route path={ROUTES.TROUBLES.DYSPHASIE} element={<Dysphasie />} />
                <Route path={ROUTES.TROUBLES.DYSORTHOGRAPHIE} element={<Dysorthographie />} />
                <Route path={ROUTES.TROUBLES.DYSGRAPHIE} element={<Dysgraphie />} />
                <Route path={ROUTES.TROUBLES.TDAH} element={<TDAH />} />
                <Route path={ROUTES.TROUBLES.AUTISME} element={<Autisme />} />
                <Route path={ROUTES.TROUBLES.AUTISME_DETAIL} element={<AutismeDetail />} />
                <Route path={ROUTES.TROUBLES.TSA} element={<TSA />} />
                <Route path={ROUTES.TROUBLES.DYSPRAXIE} element={<Dyspraxie />} />
                <Route path={ROUTES.TROUBLES.DYSCALCULIE} element={<Dyscalculie />} />
                <Route path={ROUTES.TROUBLES.NEURODEGENERATIFS} element={<Neurodegeneratifs />} />
                <Route path={ROUTES.TROUBLES.POST_TRAUMATIQUES} element={<PostTraumatiques />} />
                <Route path={ROUTES.TROUBLES.LESIONS_CEREBRALES} element={<LesionsCerebrales />} />
                
                {/* Section Communauté */}
                <Route path={ROUTES.COMMUNAUTE} element={<Communaute />} />
                
                {/* Section Ressources */}
                <Route path={ROUTES.RESSOURCES.INDEX} element={<Ressources />} />
                <Route path={ROUTES.RESSOURCES.GUIDE_ADMINISTRATIF} element={<GuideAdministratif />} />
                <Route path={ROUTES.RESSOURCES.STRATEGIES_APPRENTISSAGE} element={<StrategiesApprentissage />} />
                <Route path={ROUTES.RESSOURCES.COMMUNICATION} element={<Communication />} />
                <Route path={ROUTES.RESSOURCES.APPLICATIONS} element={<Applications />} />
                <Route path={ROUTES.RESSOURCES.PLANNINGS} element={<Plannings />} />
                <Route path={ROUTES.RESSOURCES.KITS} element={<Kits />} />
                <Route path={ROUTES.RESSOURCES.REFLEXION_STRUCTUREE} element={<ReflexionStructuree />} />
                <Route path={ROUTES.RESSOURCES.PENSEE_EN_EBULLITION} element={<PenseeEnEbullition />} />
                
                {/* Autres pages */}
                <Route path={ROUTES.APPRENTISSAGE} element={<Apprentissage />} />
                <Route path={ROUTES.VIVRE_AVEC} element={<VivreAvec />} />
                <Route path={ROUTES.AUTO_EVALUATION} element={<AutoEvaluation />} />
                <Route path={ROUTES.RECHERCHE} element={<Recherche />} />
                <Route path={ROUTES.BLOG.DETAIL} element={<BlogDetail />} />
                <Route path={ROUTES.BLOG.IMPORT} element={<BlogArticleImport />} />
                <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
                <Route path={ROUTES.POLITIQUE_CONFIDENTIALITE} element={<PolitiqueConfidentialite />} />
                <Route path={ROUTES.MENTIONS_LEGALES} element={<MentionsLegales />} />
                <Route path={ROUTES.A_PROPOS} element={<APropos />} />
                <Route path={ROUTES.GLOSSAIRE} element={<Glossaire />} />
              </Route>
              
              {/* Page 404 */}
              <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
