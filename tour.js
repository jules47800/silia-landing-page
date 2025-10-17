// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");

  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");

  // Prevent body scroll when menu is open
  if (!mobileMenu.classList.contains("hidden")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

// Toggle Accessibility Controls Menu (burger style)
function toggleAccessibilityMenu() {
  const controls = document.getElementById("accessibilityControls");
  controls.classList.toggle("open");
}

// Close accessibility menu when clicking outside
document.addEventListener("click", function (event) {
  const controls = document.getElementById("accessibilityControls");
  if (controls && !controls.contains(event.target)) {
    controls.classList.remove("open");
  }
});

// Accessibility Font Size Control
function changeFontSize(size) {
  const body = document.body;
  const sizes = {
    small: "text-base-small",
    normal: "text-base-normal",
    large: "text-base-large",
    xlarge: "text-base-xlarge",
  };

  // Remove all size classes
  Object.values(sizes).forEach((className) => {
    body.classList.remove(className);
  });

  // Add selected size class
  body.classList.add(sizes[size]);

  // Save preference to localStorage
  localStorage.setItem("fontSizePreference", size);

  // Update active button state
  document.querySelectorAll("#accessibilityControls button").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  // Fermer le menu après la sélection
  setTimeout(() => {
    document.getElementById("accessibilityControls").classList.remove("open");
  }, 300);
}

// Load saved font size preference on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedSize = localStorage.getItem("fontSizePreference") || "normal";
  const body = document.body;
  const sizes = {
    small: "text-base-small",
    normal: "text-base-normal",
    large: "text-base-large",
    xlarge: "text-base-xlarge",
  };
  body.classList.add(sizes[savedSize]);

  // Update button state
  const buttons = document.querySelectorAll("#accessibilityControls button");
  buttons.forEach((btn, index) => {
    const sizeMap = ["small", "normal", "large", "xlarge"];
    btn.classList.remove("active");
    if (sizeMap[index] === savedSize) {
      btn.classList.add("active");
    }
  });
});

// Tour Guide System with Dashboard Previews
let currentTourStep = 0;

const tourSteps = [
  {
    title: "👋 Bienvenue sur Silia !",
    content:
      "En 2 minutes chrono, découvrez comment Silia révolutionne votre communication interne. Nous allons vous présenter le dashboard d'administration : l'interface que vous utiliserez au quotidien pour animer votre structure. Prêt(e) ?",
    preview: `
      <div class="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg sm:rounded-xl border-2 border-indigo-200">
        <div class="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl">
            🚀
          </div>
          <div class="flex-1">
            <h4 class="text-base sm:text-lg font-bold text-gray-900 mb-2">Ce que vous allez découvrir :</h4>
            <ul class="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                <span>Votre interface d'administration complète</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                <span>Comment gérer vos événements en temps réel</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                <span>La publication de contenu en un clic</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
    element: null,
  },
  {
    title: "📊 Votre Dashboard : Tout sous contrôle",
    content:
      "Bienvenue dans votre cockpit ! Statistiques en temps réel, gestion de contenu, événements, sondages... Tout est centralisé dans un dashboard moderne et ultra-intuitif. Pas besoin de formation : c'est simple, c'est visuel, c'est efficace.",
    preview: `
      <div class="dashboard-preview mt-4">
        <div class="flex flex-col sm:flex-row h-auto sm:h-96">
          <!-- Sidebar -->
          <div class="dashboard-sidebar w-full sm:w-auto">
            <div class="w-8 h-8 sm:w-12 sm:h-12 bg-indigo-800 rounded-md mb-0 sm:mb-6 flex items-center justify-center">
              <div class="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded"></div>
            </div>
            <div class="flex sm:flex-col gap-2 sm:gap-3">
              <div class="dashboard-nav-item active">
                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <div class="dashboard-nav-item">
                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
              </div>
              <div class="dashboard-nav-item">
                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              </div>
              <div class="dashboard-nav-item">
                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
            </div>
          </div>
          <!-- Main Content -->
          <div class="flex-1 dashboard-content">
            <div class="dashboard-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 w-full">
              <h2 class="text-lg sm:text-xl font-bold text-gray-900 w-full sm:w-auto">Dashboard</h2>
              <div class="flex gap-2 w-full sm:w-auto justify-start sm:justify-end">
                <div class="px-2 sm:px-3 py-1 bg-indigo-600 text-white text-xs sm:text-sm rounded-sm whitespace-nowrap">Nouveau contenu</div>
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div class="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                <div class="text-2xl sm:text-3xl font-bold text-indigo-600">156</div>
                <div class="text-xs sm:text-sm text-gray-600 mt-1">Publications</div>
              </div>
              <div class="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                <div class="text-2xl sm:text-3xl font-bold text-green-600">1,247</div>
                <div class="text-xs sm:text-sm text-gray-600 mt-1">Utilisateurs actifs</div>
              </div>
              <div class="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                <div class="text-2xl sm:text-3xl font-bold text-orange-600">24</div>
                <div class="text-xs sm:text-sm text-gray-600 mt-1">Événements</div>
              </div>
            </div>
            <div class="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
              <h3 class="font-semibold mb-2 sm:mb-3 text-gray-900 text-sm sm:text-base">Activité récente</h3>
              <div class="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <div class="flex items-center gap-2 p-1 sm:p-2 hover:bg-gray-50 rounded">
                  <div class="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span class="text-gray-700 text-xs sm:text-sm">Nouvelle publication</span>
                  <span class="ml-auto text-gray-500 text-xs whitespace-nowrap">5 min</span>
                </div>
                <div class="flex items-center gap-2 p-1 sm:p-2 hover:bg-gray-50 rounded">
                  <div class="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span class="text-gray-700 text-xs sm:text-sm">Événement créé</span>
                  <span class="ml-auto text-gray-500 text-xs whitespace-nowrap">1h</span>
                </div>
                <div class="flex items-center gap-2 p-1 sm:p-2 hover:bg-gray-50 rounded">
                  <div class="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span class="text-gray-700 text-xs sm:text-sm">45 nouveaux utilisateurs</span>
                  <span class="ml-auto text-gray-500 text-xs whitespace-nowrap">Aujourd'hui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    element: null,
  },
  {
    title: "📅 Gestion d'événements : Simple & Puissant",
    content:
      "Créez un événement en 30 secondes chrono ! Définissez les places disponibles, suivez les inscriptions en direct, publiez ou dépubliez instantanément. Vos collaborateurs reçoivent une notification push automatique. C'est aussi simple que ça.",
    preview: `
      <div class="dashboard-preview mt-4">
        <div class="flex flex-col sm:flex-row h-auto sm:h-96">
          <!-- Sidebar -->
          <div class="dashboard-sidebar w-full sm:w-auto">
            <div class="w-8 h-8 sm:w-12 sm:h-12 bg-indigo-800 rounded-md mb-0 sm:mb-6 flex items-center justify-center">
              <div class="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded"></div>
            </div>
            <div class="flex sm:flex-col gap-2 sm:gap-3">
              <div class="dashboard-nav-item">
                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <div class="dashboard-nav-item">
                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
              </div>
              <div class="dashboard-nav-item">
                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              </div>
              <div class="dashboard-nav-item active">
                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
            </div>
          </div>
          <!-- Main Content -->
          <div class="flex-1 dashboard-content">
            <div class="dashboard-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 w-full">
              <div class="w-full sm:w-auto">
                <h2 class="text-lg sm:text-xl font-bold text-gray-900">Événements</h2>
                <div class="flex gap-2 sm:gap-4 mt-1 sm:mt-2 text-xs sm:text-sm">
                  <span class="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1">Actifs (3)</span>
                  <span class="text-gray-500">Archivés (12)</span>
                </div>
              </div>
              <div class="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white text-xs sm:text-sm rounded-sm font-semibold whitespace-nowrap self-start sm:self-center shrink-0">+ Nouveau</div>
            </div>
            <div class="dashboard-table overflow-x-auto">
              <div class="hidden sm:grid dashboard-table-header grid-cols-5 gap-4 text-sm">
                <div>Nom</div>
                <div>Date</div>
                <div>Places</div>
                <div>Statut</div>
                <div class="text-right">Actions</div>
              </div>
              <div class="space-y-2 sm:space-y-0">
                <div class="dashboard-table-row sm:grid sm:grid-cols-5 gap-2 sm:gap-4 items-center p-3 sm:p-2 bg-white sm:bg-transparent rounded-lg sm:rounded-none border sm:border-0 mb-2 sm:mb-0">
                  <div class="font-medium text-gray-900 text-sm sm:text-base">Soutenance projet</div>
                  <div class="text-gray-600 text-xs sm:text-sm">17/10/2025</div>
                  <div class="text-xs sm:text-sm">
                    <span class="font-semibold text-indigo-600">1 / 5</span>
                  </div>
                  <div>
                    <span class="dashboard-badge success">Publié</span>
                  </div>
                  <div class="flex gap-2 sm:justify-end mt-2 sm:mt-0">
                    <button class="px-2 sm:px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded hover:bg-indigo-200">Éditer</button>
                    <button class="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-gray-200">Dépublier</button>
                  </div>
                </div>
                <div class="dashboard-table-row sm:grid sm:grid-cols-5 gap-2 sm:gap-4 items-center p-3 sm:p-2 bg-white sm:bg-transparent rounded-lg sm:rounded-none border sm:border-0 mb-2 sm:mb-0">
                  <div class="font-medium text-gray-900 text-sm sm:text-base">Réunion équipe</div>
                  <div class="text-gray-600 text-xs sm:text-sm">22/10/2025</div>
                  <div class="text-xs sm:text-sm">
                    <span class="font-semibold text-indigo-600">12 / 20</span>
                  </div>
                  <div>
                    <span class="dashboard-badge success">Publié</span>
                  </div>
                  <div class="flex gap-2 sm:justify-end mt-2 sm:mt-0">
                    <button class="px-2 sm:px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded hover:bg-indigo-200">Éditer</button>
                    <button class="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-gray-200">Dépublier</button>
                  </div>
                </div>
                <div class="dashboard-table-row sm:grid sm:grid-cols-5 gap-2 sm:gap-4 items-center p-3 sm:p-2 bg-white sm:bg-transparent rounded-lg sm:rounded-none border sm:border-0">
                  <div class="font-medium text-gray-900 text-sm sm:text-base">Formation Silia</div>
                  <div class="text-gray-600 text-xs sm:text-sm">28/10/2025</div>
                  <div class="text-xs sm:text-sm">
                    <span class="font-semibold text-indigo-600">8 / 15</span>
                  </div>
                  <div>
                    <span class="dashboard-badge warning">Brouillon</span>
                  </div>
                  <div class="flex gap-2 sm:justify-end mt-2 sm:mt-0">
                    <button class="px-2 sm:px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded hover:bg-indigo-200">Éditer</button>
                    <button class="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs rounded hover:bg-green-200">Publier</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    element: null,
  },
  {
    title: "📱 Publication illimitée : Partagez sans limite",
    content:
      "Articles, documents, images, vidéos... Publiez tout ce que vous voulez, sans restriction ! Chaque nouvelle publication génère automatiquement une notification push vers vos utilisateurs. Simple, rapide, et ultra-efficace pour garder tout le monde informé.",
    preview: `
      <div class="dashboard-preview mt-4">
        <div class="flex flex-col sm:flex-row h-auto sm:h-96">
          <!-- Sidebar -->
          <div class="dashboard-sidebar w-full sm:w-auto">
            <div class="w-8 h-8 sm:w-12 sm:h-12 bg-indigo-800 rounded-md mb-0 sm:mb-6 flex items-center justify-center">
              <div class="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded"></div>
            </div>
            <div class="flex sm:flex-col gap-2 sm:gap-3">
              <div class="dashboard-nav-item">
                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <div class="dashboard-nav-item active">
                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
              </div>
              <div class="dashboard-nav-item">
                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              </div>
            </div>
          </div>
          <!-- Main Content -->
          <div class="flex-1 dashboard-content">
            <div class="dashboard-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 w-full">
              <div class="w-full sm:w-auto">
                <h2 class="text-lg sm:text-xl font-bold text-gray-900">Contenu</h2>
                <input type="text" placeholder="Rechercher..." class="mt-1.5 sm:mt-2 px-3 py-1.5 sm:py-2 border border-gray-300 rounded text-xs sm:text-sm w-full sm:w-64" />
              </div>
              <div class="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white text-xs sm:text-sm rounded-sm font-semibold whitespace-nowrap self-start sm:self-center shrink-0">+ Nouveau</div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div class="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div class="w-full h-24 sm:h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded mb-2 sm:mb-3 flex items-center justify-center">
                  <svg class="w-8 h-8 sm:w-12 sm:h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h4 class="font-semibold text-xs sm:text-sm mb-1">Actualités septembre</h4>
                <p class="text-xs text-gray-500 mb-2">Publié il y a 2 jours</p>
                <div class="flex gap-2 items-center">
                  <span class="dashboard-badge success text-xs">Publié</span>
                  <span class="text-xs text-gray-500">247 vues</span>
                </div>
              </div>
              <div class="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div class="w-full h-24 sm:h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded mb-2 sm:mb-3 flex items-center justify-center">
                  <svg class="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <h4 class="font-semibold text-xs sm:text-sm mb-1">Documents RH</h4>
                <p class="text-xs text-gray-500 mb-2">Publié il y a 5 jours</p>
                <div class="flex gap-2 items-center">
                  <span class="dashboard-badge success text-xs">Publié</span>
                  <span class="text-xs text-gray-500">183 vues</span>
                </div>
              </div>
              <div class="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div class="w-full h-24 sm:h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded mb-2 sm:mb-3 flex items-center justify-center">
                  <svg class="w-8 h-8 sm:w-12 sm:h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h4 class="font-semibold text-xs sm:text-sm mb-1">Photos événement</h4>
                <p class="text-xs text-gray-500 mb-2">Brouillon</p>
                <div class="flex gap-2 items-center">
                  <span class="dashboard-badge warning text-xs">Brouillon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    element: "fonctionnalites",
  },
  {
    title: "🎯 Prêt à transformer votre communication ?",
    content:
      "Vous venez de voir le dashboard que 80+ structures (CSE, restaurants, collectivités, associations) utilisent déjà au quotidien. Interface intuitive ✨ Fonctionnalités puissantes 🚀 Résultats immédiats 📈",
    preview: `
      <div class="mt-4 sm:mt-6 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl sm:rounded-2xl border-2 border-indigo-200 shadow-lg sm:shadow-xl">
        <div class="text-center">
          <div class="mb-4 sm:mb-6">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 rounded-full mb-3 sm:mb-4">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <span class="text-green-700 font-semibold text-xs sm:text-sm">Déjà utilisé par 80+ structures</span>
            </div>
          </div>
          <h4 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Lancez-vous avec Silia 🚀</h4>
          <p class="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">Essai gratuit • Sans engagement • Configuration en 5 min</p>
          <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <a href="https://calendly.com/siliasas/demo" target="_blank" class="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span class="hidden sm:inline">Réserver une démo personnalisée</span>
              <span class="sm:hidden">Réserver une démo</span>
            </a>
            <a href="dashboard-maquette.html" class="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all shadow-md hover:shadow-lg text-sm sm:text-base">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Explorer le dashboard
            </a>
          </div>
          <div class="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-indigo-200">
            <div class="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div>
                <div class="text-xl sm:text-2xl font-bold text-indigo-600">5 min</div>
                <div class="text-xs text-gray-600 mt-1">Configuration</div>
              </div>
              <div>
                <div class="text-xl sm:text-2xl font-bold text-purple-600">0€</div>
                <div class="text-xs text-gray-600 mt-1">Essai gratuit</div>
              </div>
              <div>
                <div class="text-xl sm:text-2xl font-bold text-pink-600">24/7</div>
                <div class="text-xs text-gray-600 mt-1">Support client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    element: null,
  },
];

function startTour() {
  currentTourStep = 0;
  showTourStep();
  document.getElementById("tourOverlay").classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling while tour is active
}

function closeTour() {
  document.getElementById("tourOverlay").classList.remove("active");
  document.getElementById("tourSpotlight").style.display = "none";
  document.body.style.overflow = ""; // Restore scrolling
}

function nextTourStep() {
  if (currentTourStep < tourSteps.length - 1) {
    currentTourStep++;
    showTourStep();
  } else {
    closeTour();
  }
}

function previousTourStep() {
  if (currentTourStep > 0) {
    currentTourStep--;
    showTourStep();
  }
}

function goToTourStep(index) {
  currentTourStep = index;
  showTourStep();
}

function showTourStep() {
  const step = tourSteps[currentTourStep];
  const content = document.getElementById("tourStepContent");

  // Build HTML content
  let html = `
    <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">${step.title}</h3>
    <p class="text-gray-700 text-base sm:text-lg leading-relaxed">${step.content}</p>
  `;

  // Add preview if exists
  if (step.preview) {
    html += step.preview;
  }

  html += `<div class="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    Étape ${currentTourStep + 1} sur ${tourSteps.length}
  </div>`;

  content.innerHTML = html;

  // Update buttons
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.style.visibility = currentTourStep === 0 ? "hidden" : "visible";
  prevBtn.classList.add("tour-nav-button", "secondary");

  if (currentTourStep === tourSteps.length - 1) {
    nextBtn.innerHTML = `
      <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      Terminer
    `;
  } else {
    nextBtn.innerHTML = `
      Suivant
      <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
    `;
  }
  nextBtn.classList.add("tour-nav-button");

  // Update dots
  updateTourDots();

  // Highlight element
  if (step.element) {
    setTimeout(() => {
      highlightElement(step.element);
      const element = document.getElementById(step.element);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  } else {
    document.getElementById("tourSpotlight").style.display = "none";
  }
}

function updateTourDots() {
  const dotsContainer = document.getElementById("tourDots");
  dotsContainer.innerHTML = "";
  dotsContainer.className = "tour-dots";

  for (let i = 0; i < tourSteps.length; i++) {
    const dot = document.createElement("div");
    dot.className = `tour-dot ${i === currentTourStep ? "active" : ""}`;
    dot.onclick = () => goToTourStep(i);
    dot.title = `Étape ${i + 1}`;
    dotsContainer.appendChild(dot);
  }
}

function highlightElement(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const spotlight = document.getElementById("tourSpotlight");
  const rect = element.getBoundingClientRect();

  spotlight.style.display = "block";
  spotlight.style.left = rect.left - 10 + "px";
  spotlight.style.top = rect.top - 10 + window.scrollY + "px";
  spotlight.style.width = rect.width + 20 + "px";
  spotlight.style.height = rect.height + 20 + "px";
}

// FAQ Toggle
function toggleFaq(id) {
  const content = document.getElementById(`faq-content-${id}`);
  const icon = document.getElementById(`faq-icon-${id}`);

  content.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
}

// Smooth scroll for navigation
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Stats counter animation on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("stat-number");
      }
    });
  }, observerOptions);

  document.querySelectorAll("#stats .text-5xl").forEach((el) => {
    observer.observe(el);
  });

  // Close tour on Escape key
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      document.getElementById("tourOverlay").classList.contains("active")
    ) {
      closeTour();
    }
  });
});
