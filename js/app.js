"use strict";

const I = {
  logo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16M4 12h16M4 19h10"/><path d="m16 17 2 2 4-5"/></svg>',
  dash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
  tasks:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11M9 12h11M9 18h11"/><path d="m4 6 .8.8L6.6 5M4 12l.8.8 1.8-1.8M4 18l.8.8 1.8-1.8"/></svg>',
  add:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
  projects:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>',
  analytics:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l3.5-4 3 2.5L21 7"/></svg>',
  focus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 0 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 0 1 0-4h.1A1.6 1.6 0 0 0 4.6 7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 4.6V3a2 2 0 0 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>',
  info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V4a1 1 0 0 1 1-1h13l-3 5 3 5H5"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>',
  upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3m0 0 4 4m-4-4-4 4M5 21h14"/></svg>',
  reset:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
  bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 2 2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.9l1.6-6.8L2.2 8.9l6.9-.6z"/></svg>',
  target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>'
};

const T = {
  en:{
    tagline:"Productivity command center", workspace:"Workspace", manage:"Manage",
    dashboard:"Dashboard", tasks:"Tasks", board:"Board", newTask:"New Task", projects:"Projects", calendar:"Calendar", analytics:"Analytics", focus:"Focus", settings:"Settings",
    sub_dashboard:"Today at a glance", sub_tasks:"Every task under control", sub_board:"A kanban execution board", sub_newTask:"Create a clean execution item", sub_projects:"Progress by project", sub_calendar:"Deadlines and workload", sub_analytics:"Performance intelligence", sub_focus:"Deep work timer", sub_settings:"App preferences and data",
    proTitle:"TaskFlow Pro", proMini:"Automations, sync & team workspaces.", upgrade:"Upgrade",
    totalTasks:"Total tasks", completed:"Completed", overdue:"Overdue", highPriority:"High priority", dueToday:"Due today", completionRate:"Completion rate",
    allTime:"all-time items", doneTasks:"finished execution", needsAction:"needs attention", priorityWork:"critical workload", todayFocus:"scheduled today", systemHealth:"execution score",
    recentTasks:"Recent tasks", priorityTasks:"Priority tasks", workload:"Today's workload", productivity:"Productivity score", quickActions:"Quick actions",
    qaNew:"New task", qaNewSub:"Create execution item", qaTasks:"Tasks", qaTasksSub:"Manage queue", qaProjects:"Projects", qaProjectsSub:"Track progress", qaAnalytics:"Analytics", qaAnalyticsSub:"Inspect output",
    openTasks:"Open tasks", inProgress:"In progress", review:"In review", paused:"Paused",
    searchTasks:"Search by title, project, category…", allStatuses:"All statuses", allPriorities:"All priorities", sortNewest:"Newest first", sortOldest:"Oldest first", sortDue:"Due date", sortPriority:"Priority",
    thTask:"Task", thProject:"Project", thStatus:"Status", thPriority:"Priority", thDue:"Due", thEstimate:"Estimate", thUpdated:"Updated", thActions:"",
    emptyTasksT:"No tasks yet", emptyTasksP:"Create your first task to start turning chaos into execution.", emptySearchT:"Nothing matches", emptySearchP:"Try a different search or clear your filters.", clearFilters:"Clear filters",
    addTask:"Add task", editTask:"Edit task", saveTask:"Save task", saveChanges:"Save changes", cancel:"Cancel", delete:"Delete",
    secTask:"Task", secPlan:"Planning", secNotes:"Notes",
    fTitle:"Task title", fDescription:"Description", fProject:"Project", fCategory:"Category", fStatus:"Status", fPriority:"Priority", fDue:"Due date", fEstimate:"Estimated time", fNotes:"Notes",
    required:"This field is required", invalidNum:"Enter a valid number",
    st_Open:"Open", st_InProgress:"In Progress", st_Review:"Review", st_Done:"Done", st_Paused:"Paused",
    pr_Low:"Low", pr_Normal:"Normal", pr_High:"High", pr_Urgent:"Urgent",
    taskDetail:"Task detail", markDone:"Mark done", reopen:"Reopen", duplicate:"Duplicate",
    created:"Created", updated:"Updated", noNotes:"No notes yet.", noDescription:"No description.", estimated:"Estimated time",
    projectOverview:"Project overview", noProjectsT:"No projects yet", noProjectsP:"Projects appear automatically when you add tasks with a project name.",
    dueTodayTitle:"Due today", upcoming:"Upcoming", overdueTitle:"Overdue", noCalendarT:"No deadlines yet", noCalendarP:"Add due dates to your tasks to build a deadline command center.",
    completedWeek:"Completed this week", mostActiveProject:"Most active project", priorityBreakdown:"Priority breakdown", statusBreakdown:"Status breakdown", weeklyCompletions:"Weekly completions",
    focusTitle:"Focus Sprint", focusSub:"25-minute execution mode", start:"Start", pause:"Pause", reset:"Reset",
    theme:"Dark mode", themeSub:"Switch between light and dark", language:"Language", langSub:"Interface language", exportData:"Export backup", exportSub:"Download JSON", importData:"Import backup", importSub:"Restore from JSON", resetData:"Reset all data", resetSub:"Delete every task", appName:"App name", saveSettings:"Save settings",
    toastCreated:"Task created", toastUpdated:"Task updated", toastDeleted:"Task deleted", toastDone:"Task completed", toastReopened:"Task reopened", toastDuplicated:"Task duplicated", toastExported:"Backup downloaded", toastImported:"Backup imported", toastImportErr:"Could not read that file", toastReset:"All data reset", toastFix:"Please fix the highlighted fields", toastSaved:"Settings saved", toastPro:"Pro is coming soon.",
    confirmDeleteT:"Delete this task?", confirmDeleteP:"This permanently removes the task. This can't be undone.", confirmResetT:"Reset all data?", confirmResetP:"This permanently deletes every saved task.", keepIt:"Keep it", yesDelete:"Yes, delete", yesReset:"Yes, reset"
  },
  el:{
    tagline:"Κέντρο παραγωγικότητας", workspace:"Χώρος εργασίας", manage:"Διαχείριση",
    dashboard:"Πίνακας Ελέγχου", tasks:"Εργασίες", board:"Board", newTask:"Νέα Εργασία", projects:"Projects", calendar:"Ημερολόγιο", analytics:"Στατιστικά", focus:"Focus", settings:"Ρυθμίσεις",
    sub_dashboard:"Η μέρα με μια ματιά", sub_tasks:"Κάθε εργασία υπό έλεγχο", sub_board:"Kanban board εκτέλεσης", sub_newTask:"Δημιουργία καθαρής εργασίας", sub_projects:"Πρόοδος ανά project", sub_calendar:"Deadlines και φόρτος", sub_analytics:"Νοημοσύνη απόδοσης", sub_focus:"Timer για deep work", sub_settings:"Προτιμήσεις και δεδομένα",
    proTitle:"TaskFlow Pro", proMini:"Automations, sync & team workspaces.", upgrade:"Αναβάθμιση",
    totalTasks:"Σύνολο εργασιών", completed:"Ολοκληρωμένες", overdue:"Εκπρόθεσμες", highPriority:"Υψηλή προτεραιότητα", dueToday:"Σήμερα", completionRate:"Ποσοστό ολοκλήρωσης",
    allTime:"συνολικά items", doneTasks:"τελειωμένη εκτέλεση", needsAction:"θέλει δράση", priorityWork:"κρίσιμο φορτίο", todayFocus:"προγραμματισμένα σήμερα", systemHealth:"score εκτέλεσης",
    recentTasks:"Πρόσφατες εργασίες", priorityTasks:"Εργασίες προτεραιότητας", workload:"Φόρτος ημέρας", productivity:"Score παραγωγικότητας", quickActions:"Γρήγορες ενέργειες",
    qaNew:"Νέα εργασία", qaNewSub:"Δημιουργία item", qaTasks:"Εργασίες", qaTasksSub:"Διαχείριση ουράς", qaProjects:"Projects", qaProjectsSub:"Πρόοδος", qaAnalytics:"Στατιστικά", qaAnalyticsSub:"Ανάλυση output",
    openTasks:"Ανοιχτές", inProgress:"Σε εξέλιξη", review:"Σε έλεγχο", paused:"Παύση",
    searchTasks:"Αναζήτηση τίτλου, project, κατηγορίας…", allStatuses:"Όλες οι καταστάσεις", allPriorities:"Όλες οι προτεραιότητες", sortNewest:"Νεότερες πρώτα", sortOldest:"Παλαιότερες πρώτα", sortDue:"Ημερομηνία λήξης", sortPriority:"Προτεραιότητα",
    thTask:"Εργασία", thProject:"Project", thStatus:"Κατάσταση", thPriority:"Προτεραιότητα", thDue:"Λήξη", thEstimate:"Εκτίμηση", thUpdated:"Ενημέρωση", thActions:"",
    emptyTasksT:"Καμία εργασία ακόμη", emptyTasksP:"Φτιάξε την πρώτη εργασία για να μετατρέψεις το χάος σε εκτέλεση.", emptySearchT:"Δεν βρέθηκε αποτέλεσμα", emptySearchP:"Δοκίμασε άλλη αναζήτηση ή καθάρισε τα φίλτρα.", clearFilters:"Καθαρισμός φίλτρων",
    addTask:"Προσθήκη εργασίας", editTask:"Επεξεργασία εργασίας", saveTask:"Αποθήκευση εργασίας", saveChanges:"Αποθήκευση αλλαγών", cancel:"Άκυρο", delete:"Διαγραφή",
    secTask:"Εργασία", secPlan:"Σχεδιασμός", secNotes:"Σημειώσεις",
    fTitle:"Τίτλος εργασίας", fDescription:"Περιγραφή", fProject:"Project", fCategory:"Κατηγορία", fStatus:"Κατάσταση", fPriority:"Προτεραιότητα", fDue:"Ημερομηνία λήξης", fEstimate:"Εκτιμώμενος χρόνος", fNotes:"Σημειώσεις",
    required:"Αυτό το πεδίο είναι υποχρεωτικό", invalidNum:"Βάλε έγκυρο αριθμό",
    st_Open:"Ανοιχτή", st_InProgress:"Σε Εξέλιξη", st_Review:"Έλεγχος", st_Done:"Ολοκληρωμένη", st_Paused:"Παύση",
    pr_Low:"Χαμηλή", pr_Normal:"Κανονική", pr_High:"Υψηλή", pr_Urgent:"Επείγουσα",
    taskDetail:"Λεπτομέρειες εργασίας", markDone:"Ολοκλήρωση", reopen:"Άνοιγμα ξανά", duplicate:"Αντιγραφή",
    created:"Δημιουργήθηκε", updated:"Ενημερώθηκε", noNotes:"Δεν υπάρχουν σημειώσεις.", noDescription:"Δεν υπάρχει περιγραφή.", estimated:"Εκτιμώμενος χρόνος",
    projectOverview:"Επισκόπηση project", noProjectsT:"Κανένα project ακόμη", noProjectsP:"Τα projects εμφανίζονται αυτόματα όταν βάζεις όνομα project σε εργασίες.",
    dueTodayTitle:"Λήγουν σήμερα", upcoming:"Επερχόμενες", overdueTitle:"Εκπρόθεσμες", noCalendarT:"Δεν υπάρχουν deadlines", noCalendarP:"Πρόσθεσε ημερομηνίες λήξης για να χτίσεις κέντρο ελέγχου deadlines.",
    completedWeek:"Ολοκληρώθηκαν αυτή την εβδομάδα", mostActiveProject:"Πιο ενεργό project", priorityBreakdown:"Ανάλυση προτεραιοτήτων", statusBreakdown:"Ανάλυση καταστάσεων", weeklyCompletions:"Ολοκληρώσεις εβδομάδας",
    focusTitle:"Focus Sprint", focusSub:"25 λεπτά execution mode", start:"Start", pause:"Pause", reset:"Reset",
    theme:"Dark mode", themeSub:"Εναλλαγή light/dark", language:"Γλώσσα", langSub:"Γλώσσα interface", exportData:"Export backup", exportSub:"Λήψη JSON", importData:"Import backup", importSub:"Επαναφορά από JSON", resetData:"Reset δεδομένων", resetSub:"Διαγραφή όλων", appName:"Όνομα app", saveSettings:"Αποθήκευση ρυθμίσεων",
    toastCreated:"Η εργασία δημιουργήθηκε", toastUpdated:"Η εργασία ενημερώθηκε", toastDeleted:"Η εργασία διαγράφηκε", toastDone:"Η εργασία ολοκληρώθηκε", toastReopened:"Η εργασία άνοιξε ξανά", toastDuplicated:"Η εργασία αντιγράφηκε", toastExported:"Το backup κατέβηκε", toastImported:"Το backup έγινε import", toastImportErr:"Δεν διαβάστηκε το αρχείο", toastReset:"Τα δεδομένα διαγράφηκαν", toastFix:"Διόρθωσε τα πεδία", toastSaved:"Οι ρυθμίσεις αποθηκεύτηκαν", toastPro:"Το Pro έρχεται σύντομα.",
    confirmDeleteT:"Να διαγραφεί η εργασία;", confirmDeleteP:"Η εργασία θα διαγραφεί μόνιμα.", confirmResetT:"Reset όλων των δεδομένων;", confirmResetP:"Θα διαγραφούν όλες οι αποθηκευμένες εργασίες.", keepIt:"Κράτησέ το", yesDelete:"Ναι, διαγραφή", yesReset:"Ναι, reset"
  }
};

const LS = "taskflow_blueprint_multifile_v1";
const page = document.body.dataset.page || "dashboard";
let state = {
  lang: localStorage.getItem("tf_lang") || "el",
  theme: localStorage.getItem("tf_theme") || "light",
  tasks:[],
  query:"",
  statusFilter:"",
  priorityFilter:"",
  sort:"newest",
  appName:"TaskFlow Blueprint",
  focusSeconds: Number(localStorage.getItem("tf_focus_seconds") || 1500),
  focusRunning:false,
  timer:null
};

const app = document.getElementById("app");
const overlay = document.getElementById("overlay");
const modalHost = document.getElementById("modalHost");
const scrim = document.getElementById("scrim");
const toasts = document.getElementById("toasts");

function t(k){return T[state.lang][k] || T.en[k] || k}
function uid(){return "TF-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2,5).toUpperCase()}
function todayISO(){return new Date().toISOString().slice(0,10)}
function esc(s){return String(s ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function fmtDate(d){if(!d)return "—";return new Date(d+"T00:00:00").toLocaleDateString(state.lang==="el"?"el-GR":"en-GB",{day:"2-digit",month:"short",year:"numeric"})}
function fmtDT(d){if(!d)return "—";return new Date(d).toLocaleString(state.lang==="el"?"el-GR":"en-GB",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}
function daysBetween(a,b){return Math.ceil((new Date(a+"T00:00:00") - new Date(b+"T00:00:00"))/86400000)}
function isOverdue(task){return task.due && task.status!=="Done" && daysBetween(task.due,todayISO())<0}
function isDueToday(task){return task.due===todayISO() && task.status!=="Done"}
function priorityRank(p){return {Urgent:4,High:3,Normal:2,Low:1}[p] || 0}
function statusClass(s){return {Open:"b-open",InProgress:"b-progress",Review:"b-review",Done:"b-done",Paused:"b-paused"}[s] || "b-open"}
function priorityClass(p){return {Low:"p-low",Normal:"p-normal",High:"p-high",Urgent:"p-urgent"}[p] || "p-normal"}
function statusLabel(s){return t("st_"+s)}
function priorityLabel(p){return t("pr_"+p)}
function save(){localStorage.setItem(LS,JSON.stringify({tasks:state.tasks,appName:state.appName}))}
function load(){
  const raw = localStorage.getItem(LS);
  if(raw){
    try{
      const data = JSON.parse(raw);
      state.tasks = Array.isArray(data.tasks) ? data.tasks : [];
      state.appName = data.appName || "TaskFlow Blueprint";
    }catch(e){state.tasks=[]}
  }
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.lang = state.lang;
}
function toast(msg,type="ok",sub=""){
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.innerHTML = `${type==="err"?I.alert:type==="info"?I.info:I.check}<div class="toast-txt">${esc(msg)}${sub?`<small>${esc(sub)}</small>`:""}</div>`;
  toasts.appendChild(el);
  setTimeout(()=>{el.classList.add("out");setTimeout(()=>el.remove(),260)},3000);
}
function closeModal(){overlay.classList.remove("open");modalHost.innerHTML=""}
function openModal(html){modalHost.innerHTML=html;overlay.classList.add("open")}
overlay?.addEventListener("click",e=>{if(e.target===overlay)closeModal()});
scrim?.addEventListener("click",()=>toggleSidebar(false));

function stats(){
  const total = state.tasks.length;
  const done = state.tasks.filter(x=>x.status==="Done").length;
  const overdue = state.tasks.filter(isOverdue).length;
  const high = state.tasks.filter(x=>["High","Urgent"].includes(x.priority) && x.status!=="Done").length;
  const dueToday = state.tasks.filter(isDueToday).length;
  const rate = total ? Math.round(done/total*100) : 0;
  return {total,done,overdue,high,dueToday,rate};
}
function filteredTasks(){
  let arr = [...state.tasks];
  const q = state.query.trim().toLowerCase();
  if(q) arr = arr.filter(x => [x.title,x.description,x.project,x.category,x.notes,x.id].some(v=>String(v||"").toLowerCase().includes(q)));
  if(state.statusFilter) arr = arr.filter(x=>x.status===state.statusFilter);
  if(state.priorityFilter) arr = arr.filter(x=>x.priority===state.priorityFilter);
  arr.sort((a,b)=>{
    if(state.sort==="oldest") return new Date(a.createdAt)-new Date(b.createdAt);
    if(state.sort==="due") return (a.due||"9999-12-31").localeCompare(b.due||"9999-12-31");
    if(state.sort==="priority") return priorityRank(b.priority)-priorityRank(a.priority);
    return new Date(b.createdAt)-new Date(a.createdAt);
  });
  return arr;
}
function navItems(){
  const s=stats();
  return [
    ["index.html","dashboard",I.dash,t("dashboard"),""],
    ["tasks.html","tasks",I.tasks,t("tasks"),String(s.total)],
    ["board.html","board",I.tasks,t("board"),""],
    ["projects.html","projects",I.projects,t("projects"),""],
    ["calendar.html","calendar",I.calendar,t("calendar"),String(s.dueToday+s.overdue)],
    ["analytics.html","analytics",I.analytics,t("analytics"),""],
    ["focus.html","focus",I.focus,t("focus"),""],
    ["settings.html","settings",I.settings,t("settings"),""]
  ];
}
function go(url){location.href=url}
function toggleSidebar(force){
  const side = document.querySelector(".sidebar");
  if(!side)return;
  side.classList.toggle("open", typeof force==="boolean"?force:!side.classList.contains("open"));
  scrim?.classList.toggle("open", side.classList.contains("open"));
}
function shell(content){
  const subtitles = {
    dashboard:t("sub_dashboard"),tasks:t("sub_tasks"),board:t("sub_board"),projects:t("sub_projects"),
    calendar:t("sub_calendar"),analytics:t("sub_analytics"),focus:t("sub_focus"),settings:t("sub_settings")
  };
  const titleMap = {dashboard:t("dashboard"),tasks:t("tasks"),board:t("board"),projects:t("projects"),calendar:t("calendar"),analytics:t("analytics"),focus:t("focus"),settings:t("settings")};
  app.innerHTML = `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">${I.logo}</div>
        <div><div class="brand-name">TaskFlow <b>Blueprint</b></div><div class="brand-sub">${t("tagline")}</div></div>
      </div>
      <nav class="nav">
        <div class="nav-label">${t("workspace")}</div>
        ${navItems().slice(0,3).map(navHTML).join("")}
        <div class="nav-label">${t("manage")}</div>
        ${navItems().slice(3).map(navHTML).join("")}
      </nav>
      <div class="sidebar-foot">
        <div class="pro-mini"><h4>${t("proTitle")}</h4><p>${t("proMini")}</p><button onclick="toast(t('toastPro'),'info')">${t("upgrade")}</button></div>
      </div>
    </aside>
    <main class="main">
      <header class="topbar">
        <button class="menu-btn" onclick="toggleSidebar()">${I.menu}</button>
        <div><div class="page-title">${titleMap[page]}</div><div class="page-sub">${subtitles[page]}</div></div>
        <div class="topbar-actions">
          <div class="lang-switch"><button class="${state.lang==="el"?"active":""}" onclick="setLang('el')">EL</button><button class="${state.lang==="en"?"active":""}" onclick="setLang('en')">EN</button></div>
          <button class="icon-btn" onclick="toggleTheme()">${state.theme==="dark"?I.sun:I.moon}</button>
          <button class="btn btn-primary" onclick="openTaskForm()">${I.add}<span>${t("addTask")}</span></button>
        </div>
      </header>
      <section class="content view">${content}</section>
      <nav class="bottom-nav">
        ${navItems().slice(0,5).map(([href,id,ic,label])=>`
          <button class="bn-item ${id===page?"active":""}" onclick="go('${href}')">${ic}<span>${label}</span></button>`).join("")}
      </nav>
    </main>
  `;
}
function navHTML([href,id,ic,label,badge]){
  const active = page===id;
  return `<button class="nav-item ${active?"active":""}" onclick="go('${href}')">${ic}<span>${label}</span>${badge?`<span class="nav-badge">${badge}</span>`:""}</button>`;
}
function kpi(label,val,foot,icon,tone){return `<div class="kpi tone-${tone}"><div class="kpi-top"><div class="kpi-ic">${icon}</div><div class="kpi-label">${label}</div></div><div class="kpi-val">${val}</div><div class="kpi-foot">${foot}</div></div>`}
function dashboardView(){
  const s=stats();
  const recent = [...state.tasks].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,5);
  const pri = state.tasks.filter(x=>["High","Urgent"].includes(x.priority)&&x.status!=="Done").sort((a,b)=>priorityRank(b.priority)-priorityRank(a.priority)).slice(0,5);
  const open = state.tasks.filter(x=>x.status==="Open").length;
  const progress = state.tasks.filter(x=>x.status==="InProgress").length;
  const review = state.tasks.filter(x=>x.status==="Review").length;
  const paused = state.tasks.filter(x=>x.status==="Paused").length;
  return `
    <div class="kpi-grid">
      ${kpi(t("totalTasks"),s.total,t("allTime"),I.tasks,"blue")}
      ${kpi(t("completed"),s.done,t("doneTasks"),I.check,"green")}
      ${kpi(t("overdue"),s.overdue,t("needsAction"),I.alert,"red")}
      ${kpi(t("highPriority"),s.high,t("priorityWork"),I.flag,"amber")}
      ${kpi(t("dueToday"),s.dueToday,t("todayFocus"),I.focus,"teal")}
      ${kpi(t("completionRate"),s.rate+"<small>%</small>",t("systemHealth"),I.target,"accent")}
    </div>
    <div class="dash-grid">
      <div class="panel">
        <div class="panel-head"><div><span class="eyebrow">${t("dashboard")}</span><h3>${t("recentTasks")}</h3></div><div class="panel-head-actions"><button class="btn btn-ghost btn-sm" onclick="go('tasks.html')">${t("tasks")}</button></div></div>
        <div class="panel-body">${recent.length?miniList(recent):empty(I.tasks,t("emptyTasksT"),t("emptyTasksP"))}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><span class="eyebrow">${t("productivity")}</span><h3>${t("productivity")}</h3></div></div>
        <div class="panel-body">
          <div class="score-ring" style="background:conic-gradient(var(--accent) ${s.rate*3.6}deg,var(--surface-3) 0deg)"><div class="score-val"><b>${s.rate}</b><span>/ 100</span></div></div>
          <p style="text-align:center;color:var(--muted);font-size:12px;margin-top:14px">${t("systemHealth")}</p>
        </div>
      </div>
    </div>
    <div class="triple-grid">
      <div class="panel"><div class="panel-head"><div><span class="eyebrow">${t("priorityWork")}</span><h3>${t("priorityTasks")}</h3></div></div><div class="panel-body">${pri.length?miniList(pri):empty(I.flag,t("emptyTasksT"),t("emptyTasksP"))}</div></div>
      <div class="panel"><div class="panel-head"><div><span class="eyebrow">${t("workload")}</span><h3>${t("workload")}</h3></div></div><div class="panel-body">${hbar(t("openTasks"),open,s.total,"var(--blue)")}${hbar(t("inProgress"),progress,s.total,"var(--accent)")}${hbar(t("review"),review,s.total,"var(--violet)")}${hbar(t("paused"),paused,s.total,"var(--slate)")}</div></div>
      <div class="panel"><div class="panel-head"><div><span class="eyebrow">${t("quickActions")}</span><h3>${t("quickActions")}</h3></div></div><div class="panel-body"><div class="qa-grid">
        ${qa(I.add,t("qaNew"),t("qaNewSub"),"openTaskForm()","accent")}
        ${qa(I.tasks,t("qaTasks"),t("qaTasksSub"),"go('tasks.html')","blue")}
        ${qa(I.projects,t("qaProjects"),t("qaProjectsSub"),"go('projects.html')","violet")}
        ${qa(I.analytics,t("qaAnalytics"),t("qaAnalyticsSub"),"go('analytics.html')","green")}
      </div></div></div>
    </div>`;
}
function qa(ic,title,sub,action,tone){return `<button class="qa" onclick="${action}"><span class="qa-ic tone-${tone}">${ic}</span><span><b>${title}</b><span>${sub}</span></span></button>`}
function hbar(label,val,total,color){const pct = total ? Math.round(val/total*100) : 0;return `<div class="hbar-row"><div class="hbar-top"><b>${label}</b><span>${val}</span></div><div class="hbar-track"><div class="hbar-fill" style="width:${pct}%;background:${color}"></div></div></div>`}
function miniList(arr){
  return `<div class="mini-list">${arr.map(x=>`
    <div class="mini-row" onclick="openTaskDetail('${x.id}')">
      ${completionCheckbox(x)}
      <div class="mini-main"><b class="${x.status==="Done"?"completed-title":""}">${esc(x.title)}</b><span>${esc(x.project||"—")} · ${statusLabel(x.status)}</span></div>
      <div class="mini-end"><span class="pri ${priorityClass(x.priority)}">${I.flag}${priorityLabel(x.priority)}</span><div class="cell-sub">${fmtDate(x.due)}</div></div>
    </div>`).join("")}</div>`;
}
function empty(ic,title,body,btn=""){return `<div class="empty"><div class="empty-ic">${ic}</div><h3>${title}</h3><p>${body}</p>${btn}</div>`}
function tasksView(){
  const arr=filteredTasks();
  return `
    <div class="toolbar">
      <div class="search">${I.search}<input value="${esc(state.query)}" placeholder="${t("searchTasks")}" oninput="state.query=this.value;renderPage()"></div>
      <select class="fld-select" onchange="state.statusFilter=this.value;renderPage()"><option value="">${t("allStatuses")}</option>${["Open","InProgress","Review","Done","Paused"].map(s=>`<option value="${s}" ${state.statusFilter===s?"selected":""}>${statusLabel(s)}</option>`).join("")}</select>
      <select class="fld-select" onchange="state.priorityFilter=this.value;renderPage()"><option value="">${t("allPriorities")}</option>${["Low","Normal","High","Urgent"].map(p=>`<option value="${p}" ${state.priorityFilter===p?"selected":""}>${priorityLabel(p)}</option>`).join("")}</select>
      <select class="fld-select" onchange="state.sort=this.value;renderPage()"><option value="newest" ${state.sort==="newest"?"selected":""}>${t("sortNewest")}</option><option value="oldest" ${state.sort==="oldest"?"selected":""}>${t("sortOldest")}</option><option value="due" ${state.sort==="due"?"selected":""}>${t("sortDue")}</option><option value="priority" ${state.sort==="priority"?"selected":""}>${t("sortPriority")}</option></select>
    </div>
    <div class="panel">
      ${arr.length?`<div class="tbl-wrap"><table><thead><tr><th>${t("thTask")}</th><th>${t("thProject")}</th><th>${t("thStatus")}</th><th>${t("thPriority")}</th><th>${t("thDue")}</th><th>${t("thEstimate")}</th><th>${t("thUpdated")}</th><th>${t("thActions")}</th></tr></thead><tbody>${arr.map(taskRow).join("")}</tbody></table></div>`:
      empty(I.tasks,state.tasks.length?t("emptySearchT"):t("emptyTasksT"),state.tasks.length?t("emptySearchP"):t("emptyTasksP"),state.tasks.length?`<button class="btn btn-ghost" onclick="clearFilters()">${t("clearFilters")}</button>`:`<button class="btn btn-primary" onclick="openTaskForm()">${I.add}${t("addTask")}</button>`)}
    </div>`;
}
function completionCheckbox(x){
  return `<label class="task-check" title="${x.status==="Done"?t("reopen"):t("markDone")}" onclick="event.stopPropagation()">
    <input type="checkbox" ${x.status==="Done"?"checked":""} onchange="setTaskCompleted('${x.id}', this.checked)">
    <span class="box"></span>
  </label>`;
}
function taskRow(x){
  return `<tr onclick="openTaskDetail('${x.id}')">
    <td>
      <div class="task-title-line">
        ${completionCheckbox(x)}
        <div class="task-title-copy"><div class="tid">${x.id}</div><div class="cell-strong ${x.status==="Done"?"completed-title":""}">${esc(x.title)}</div><div class="cell-sub">${esc(x.category||"—")}</div></div>
      </div>
    </td>
    <td>${esc(x.project||"—")}</td>
    <td><span class="badge ${statusClass(x.status)}"><span class="dot"></span>${statusLabel(x.status)}</span></td>
    <td><span class="pri ${priorityClass(x.priority)}">${I.flag}${priorityLabel(x.priority)}</span></td>
    <td>${fmtDate(x.due)}${isOverdue(x)?`<div class="cell-sub" style="color:var(--red)">${t("overdue")}</div>`:""}</td>
    <td>${x.estimate?esc(x.estimate)+"h":"—"}</td>
    <td>${fmtDT(x.updatedAt)}</td>
    <td onclick="event.stopPropagation()"><div class="row-actions"><button class="act-btn" onclick="openTaskForm('${x.id}')">${I.edit}</button><button class="act-btn del" onclick="confirmDelete('${x.id}')">${I.trash}</button></div></td>
  </tr>`;
}
function boardView(){
  const cols = [["Open",t("openTasks")],["InProgress",t("inProgress")],["Review",t("review")],["Done",t("completed")]];
  return `<div class="kanban">${cols.map(([status,label])=>{
    const arr = state.tasks.filter(x=>x.status===status).sort((a,b)=>priorityRank(b.priority)-priorityRank(a.priority));
    return `<div class="kanban-col"><div class="kanban-head"><b>${label}</b><span class="tag">${arr.length}</span></div><div class="kanban-body">${arr.length?arr.map(taskCard).join(""):empty(I.tasks,t("emptyTasksT"),t("emptyTasksP"))}</div></div>`
  }).join("")}</div>`;
}
function taskCard(x){
  return `<div class="task-card" onclick="openTaskDetail('${x.id}')">
    <div class="task-title-line">${completionCheckbox(x)}<div><h4 class="${x.status==="Done"?"completed-title":""}">${esc(x.title)}</h4><p>${esc(x.description||x.project||"—")}</p></div></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><span class="pri ${priorityClass(x.priority)}">${I.flag}${priorityLabel(x.priority)}</span><span class="tag">${fmtDate(x.due)}</span></div>
  </div>`;
}
function projectsView(){
  const map = groupByProject();
  const projects = Object.entries(map).sort((a,b)=>b[1].length-a[1].length);
  if(!projects.length) return `<div class="panel">${empty(I.projects,t("noProjectsT"),t("noProjectsP"),`<button class="btn btn-primary" onclick="openTaskForm()">${I.add}${t("addTask")}</button>`)}</div>`;
  return `<div class="kpi-grid">${projects.map(([name,tasks])=>{
    const done = tasks.filter(x=>x.status==="Done").length;
    const pct = tasks.length ? Math.round(done/tasks.length*100) : 0;
    const urgent = tasks.filter(x=>x.priority==="Urgent"&&x.status!=="Done").length;
    return `<div class="kpi tone-violet" style="cursor:pointer" onclick="localStorage.setItem('tf_project_filter','${esc(name)}');go('tasks.html')">
      <div class="kpi-top"><div class="kpi-ic">${I.projects}</div><div class="kpi-label">${esc(name)}</div></div>
      <div class="kpi-val">${pct}<small>%</small></div>
      <div class="kpi-foot">${done}/${tasks.length} · ${urgent} ${t("highPriority")}</div>
      <div class="hbar-track" style="margin-top:12px"><div class="hbar-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join("")}</div>`;
}
function calendarView(){
  const dueToday = state.tasks.filter(isDueToday).sort((a,b)=>priorityRank(b.priority)-priorityRank(a.priority));
  const overdue = state.tasks.filter(isOverdue).sort((a,b)=>(a.due||"").localeCompare(b.due||""));
  const upcoming = state.tasks.filter(x=>x.due && x.status!=="Done" && daysBetween(x.due,todayISO())>0).sort((a,b)=>a.due.localeCompare(b.due)).slice(0,12);
  if(!dueToday.length && !overdue.length && !upcoming.length) return `<div class="panel">${empty(I.calendar,t("noCalendarT"),t("noCalendarP"),`<button class="btn btn-primary" onclick="openTaskForm()">${I.add}${t("addTask")}</button>`)}</div>`;
  return `<div class="triple-grid">${calendarPanel(t("overdueTitle"),overdue,I.alert)}${calendarPanel(t("dueTodayTitle"),dueToday,I.focus)}${calendarPanel(t("upcoming"),upcoming,I.calendar)}</div>`;
}
function calendarPanel(title,arr,ic){return `<div class="panel"><div class="panel-head"><div><span class="eyebrow">${t("calendar")}</span><h3>${title}</h3></div></div><div class="panel-body">${arr.length?miniList(arr):empty(ic,title,t("emptySearchP"))}</div></div>`}
function analyticsView(){
  const s=stats();
  const weekLabels=[6,5,4,3,2,1,0].map(n=>{const d=new Date(); d.setDate(d.getDate()-n); return d});
  const weekCounts = weekLabels.map(d=>{const iso=d.toISOString().slice(0,10);return state.tasks.filter(x=>x.status==="Done" && x.completedAt && x.completedAt.slice(0,10)===iso).length});
  const max=Math.max(1,...weekCounts);
  const pr = countBy("priority");
  const st = countBy("status");
  const mostProject = Object.entries(groupByProject()).sort((a,b)=>b[1].length-a[1].length)[0]?.[0] || "—";
  return `<div class="kpi-grid">${kpi(t("completionRate"),s.rate+"<small>%</small>",t("systemHealth"),I.target,"accent")}${kpi(t("completedWeek"),weekCounts.reduce((a,b)=>a+b,0),t("doneTasks"),I.check,"green")}${kpi(t("mostActiveProject"),esc(mostProject),t("projectOverview"),I.projects,"violet")}${kpi(t("highPriority"),s.high,t("priorityWork"),I.flag,"amber")}</div>
    <div class="dash-grid"><div class="panel"><div class="panel-head"><div><span class="eyebrow">${t("analytics")}</span><h3>${t("weeklyCompletions")}</h3></div></div><div class="panel-body"><div class="bars">${weekCounts.map((v,i)=>`<div class="bar-col"><div class="bar" style="height:${Math.max(3,v/max*100)}%"></div><div class="bar-x">${weekLabels[i].toLocaleDateString(state.lang==="el"?"el-GR":"en-GB",{weekday:"short"})}</div></div>`).join("")}</div></div></div>
    <div class="panel"><div class="panel-head"><div><span class="eyebrow">${t("analytics")}</span><h3>${t("statusBreakdown")}</h3></div></div><div class="panel-body">${donut(st,"status")}</div></div></div>
    <div class="panel"><div class="panel-head"><div><span class="eyebrow">${t("analytics")}</span><h3>${t("priorityBreakdown")}</h3></div></div><div class="panel-body">${legend(pr,"priority")}</div></div>`;
}
function focusView(){
  return `<div class="dash-grid">
    <div class="panel"><div class="panel-head"><div><span class="eyebrow">${t("focus")}</span><h3>${t("focusTitle")}</h3></div></div>
      <div class="focus-timer"><div class="kpi-ic tone-accent" style="width:64px;height:64px">${I.focus}</div><div class="focus-time" id="focusTime">${formatFocus()}</div><p style="color:var(--muted);margin-bottom:18px">${t("focusSub")}</p>
        <div class="focus-controls"><button class="btn btn-primary" onclick="startFocus()">${I.bolt}${t("start")}</button><button class="btn btn-ghost" onclick="pauseFocus()">${t("pause")}</button><button class="btn btn-ghost" onclick="resetFocus()">${I.reset}${t("reset")}</button></div>
      </div>
    </div>
    <div class="panel"><div class="panel-head"><div><span class="eyebrow">${t("priorityWork")}</span><h3>${t("priorityTasks")}</h3></div></div><div class="panel-body">${miniList(state.tasks.filter(x=>x.status!=="Done").sort((a,b)=>priorityRank(b.priority)-priorityRank(a.priority)).slice(0,6)) || empty(I.tasks,t("emptyTasksT"),t("emptyTasksP"))}</div></div>
  </div>`;
}
function settingsView(){
  return `<div class="set-grid"><div class="panel"><div class="panel-head"><div><span class="eyebrow">${t("settings")}</span><h3>${t("settings")}</h3></div></div><div class="panel-body">
    <div class="field"><label>${t("appName")}</label><input value="${esc(state.appName)}" id="appNameInput"></div>
    <div class="set-row"><div class="set-info"><b>${t("theme")}</b><span>${t("themeSub")}</span></div><label class="toggle"><input type="checkbox" ${state.theme==="dark"?"checked":""} onchange="toggleTheme()"><span class="track"></span></label></div>
    <div class="set-row"><div class="set-info"><b>${t("language")}</b><span>${t("langSub")}</span></div><div class="lang-switch" style="display:flex"><button class="${state.lang==="el"?"active":""}" onclick="setLang('el')">EL</button><button class="${state.lang==="en"?"active":""}" onclick="setLang('en')">EN</button></div></div>
    <div class="set-row"><div class="set-info"><b>${t("exportData")}</b><span>${t("exportSub")}</span></div><button class="btn btn-ghost btn-sm" onclick="exportData()">${I.download}${t("exportData")}</button></div>
    <div class="set-row"><div class="set-info"><b>${t("importData")}</b><span>${t("importSub")}</span></div><button class="btn btn-ghost btn-sm" onclick="document.getElementById('importFile').click()">${I.upload}${t("importData")}</button><input id="importFile" type="file" accept="application/json" hidden onchange="importData(this.files[0])"></div>
    <div class="set-row"><div class="set-info"><b>${t("resetData")}</b><span>${t("resetSub")}</span></div><button class="btn btn-danger btn-sm" onclick="confirmReset()">${I.reset}${t("resetData")}</button></div>
    <button class="btn btn-primary" onclick="saveSettings()">${I.check}${t("saveSettings")}</button></div></div>
    <div class="pro-card"><span class="eyebrow">${t("proTitle")}</span><h2>${t("proTitle")}</h2><p>${t("proMini")}</p><div class="pro-feats">${["Automations","Cloud sync","Team spaces","AI planning","Calendar sync","Reports"].map(x=>`<div class="pro-feat">${I.check}<span>${x}</span><span class="lock">LOCK</span></div>`).join("")}</div><button class="btn btn-primary" style="width:100%" onclick="toast(t('toastPro'),'info')">${t("upgrade")}</button></div></div>`;
}
function clearFilters(){state.query="";state.statusFilter="";state.priorityFilter="";state.sort="newest";renderPage()}
function countBy(key){const o={};state.tasks.forEach(x=>o[x[key]]=(o[x[key]]||0)+1);return o}
function groupByProject(){const o={};state.tasks.forEach(x=>{const p=x.project?.trim()||"Unassigned";(o[p]||(o[p]=[])).push(x)});return o}
function donut(obj,type){
  const entries=Object.entries(obj), total=entries.reduce((a,[,v])=>a+v,0);
  const colors=["var(--blue)","var(--accent)","var(--violet)","var(--green)","var(--slate)"];
  let acc=0, stops=[];
  entries.forEach(([k,v],i)=>{const deg=total?v/total*360:0;stops.push(`${colors[i%colors.length]} ${acc}deg ${acc+deg}deg`);acc+=deg});
  return `<div class="donut-wrap"><div class="donut" style="background:${total?`conic-gradient(${stops.join(",")})`:"var(--surface-3)"}"><div class="donut-center"><b>${total}</b><span>${t("totalTasks")}</span></div></div>${legend(obj,type,true)}</div>`;
}
function legend(obj,type){
  const entries=Object.entries(obj);
  const colors=["var(--blue)","var(--accent)","var(--violet)","var(--green)","var(--slate)"];
  if(!entries.length)return empty(I.analytics,t("emptyTasksT"),t("emptyTasksP"));
  return `<div class="legend">${entries.map(([k,v],i)=>`<div class="legend-row"><span class="legend-dot" style="background:${colors[i%colors.length]}"></span><span>${type==="status"?statusLabel(k):priorityLabel(k)}</span><span class="lv">${v}</span></div>`).join("")}</div>`;
}
function setLang(lang){state.lang=lang;localStorage.setItem("tf_lang",lang);document.documentElement.lang=lang;renderPage()}
function toggleTheme(){state.theme=state.theme==="dark"?"light":"dark";localStorage.setItem("tf_theme",state.theme);document.documentElement.dataset.theme=state.theme;renderPage()}
function saveSettings(){state.appName=document.getElementById("appNameInput").value.trim()||"TaskFlow Blueprint";save();toast(t("toastSaved"));renderPage()}
function openTaskForm(id=""){
  const task = id ? state.tasks.find(x=>x.id===id) : null;
  const x = task || {title:"",description:"",project:"",category:"",status:"Open",priority:"Normal",due:"",estimate:"",notes:""};
  openModal(`<div class="modal"><div class="modal-head"><div><span class="eyebrow">${task?t("editTask"):t("newTask")}</span><h3>${task?t("editTask"):t("addTask")}</h3></div><button class="modal-close" onclick="closeModal()">${I.close}</button></div>
    <form class="modal-body" id="taskForm"><div class="form-grid">
      <div class="form-section-title">${t("secTask")}</div>${field("title",t("fTitle"),x.title,true)}${field("project",t("fProject"),x.project,false)}
      <div class="field full"><label>${t("fDescription")}</label><textarea name="description">${esc(x.description)}</textarea></div>
      <div class="form-section-title">${t("secPlan")}</div>${selectField("status",t("fStatus"),["Open","InProgress","Review","Done","Paused"],x.status,statusLabel)}${selectField("priority",t("fPriority"),["Low","Normal","High","Urgent"],x.priority,priorityLabel)}${field("category",t("fCategory"),x.category,false)}${field("due",t("fDue"),x.due,false,"date")}${field("estimate",t("fEstimate"),x.estimate,false,"number","0.25")}
      <div class="form-section-title">${t("secNotes")}</div><div class="field full"><label>${t("fNotes")}</label><textarea name="notes">${esc(x.notes)}</textarea></div>
    </div></form><div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveTask('${id}')">${I.check}${task?t("saveChanges"):t("saveTask")}</button></div></div>`);
}
function field(name,label,val,req=false,type="text",step=""){return `<div class="field" data-field="${name}"><label>${label}${req?` <span class="req">*</span>`:""}</label><input name="${name}" type="${type}" ${step?`step="${step}"`:""} value="${esc(val)}"><span class="err-msg">${t("required")}</span></div>`}
function selectField(name,label,opts,val,labeller){return `<div class="field"><label>${label}</label><select name="${name}">${opts.map(o=>`<option value="${o}" ${val===o?"selected":""}>${labeller(o)}</option>`).join("")}</select></div>`}
function saveTask(id=""){
  const form = document.getElementById("taskForm");
  const data = Object.fromEntries(new FormData(form).entries());
  form.querySelectorAll(".field").forEach(f=>f.classList.remove("err"));
  let ok=true;
  if(!data.title.trim()){form.querySelector('[data-field="title"]').classList.add("err");ok=false}
  if(data.estimate && Number(data.estimate)<0){form.querySelector('[data-field="estimate"]').classList.add("err");ok=false}
  if(!ok){toast(t("toastFix"),"err");return}
  const now = new Date().toISOString();
  if(id){
    const i = state.tasks.findIndex(x=>x.id===id);
    const old = state.tasks[i];
    state.tasks[i] = {...old,...data,title:data.title.trim(),updatedAt:now,completedAt:data.status==="Done"?(old.completedAt||now):""};
    toast(t("toastUpdated"));
  }else{
    state.tasks.unshift({...data,id:uid(),title:data.title.trim(),createdAt:now,updatedAt:now,completedAt:data.status==="Done"?now:""});
    toast(t("toastCreated"));
  }
  save();closeModal();renderPage();
}
function openTaskDetail(id){
  const x = state.tasks.find(t=>t.id===id);
  if(!x)return;
  openModal(`<div class="modal"><div class="modal-head"><div><span class="eyebrow">${x.id}</span><h3>${esc(x.title)}</h3></div><button class="modal-close" onclick="closeModal()">${I.close}</button></div>
    <div class="modal-body"><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px"><span class="badge ${statusClass(x.status)}"><span class="dot"></span>${statusLabel(x.status)}</span><span class="pri ${priorityClass(x.priority)}">${I.flag}${priorityLabel(x.priority)}</span>${isOverdue(x)?`<span class="badge" style="background:var(--red-soft);color:var(--red)">${t("overdue")}</span>`:""}</div>
      <div class="detail-grid">${dl(t("fProject"),x.project||"—")}${dl(t("fCategory"),x.category||"—")}${dl(t("fDue"),fmtDate(x.due))}${dl(t("estimated"),x.estimate?x.estimate+"h":"—")}${dl(t("created"),fmtDT(x.createdAt))}${dl(t("updated"),fmtDT(x.updatedAt))}
      <div class="dl full"><dt>${t("fDescription")}</dt><dd><div class="note-box">${esc(x.description||t("noDescription"))}</div></dd></div><div class="dl full"><dt>${t("fNotes")}</dt><dd><div class="note-box">${esc(x.notes||t("noNotes"))}</div></dd></div></div>
    </div>
    <div class="modal-foot"><button class="btn btn-danger" onclick="confirmDelete('${x.id}')">${I.trash}${t("delete")}</button><button class="btn btn-ghost" onclick="duplicateTask('${x.id}')">${I.copy}${t("duplicate")}</button><button class="btn btn-ghost" onclick="openTaskForm('${x.id}')">${I.edit}${t("editTask")}</button><button class="btn btn-primary" onclick="setTaskCompleted('${x.id}', ${x.status!=="Done"})">${I.check}${x.status==="Done"?t("reopen"):t("markDone")}</button></div></div>`);
}
function dl(k,v){return `<div class="dl"><dt>${k}</dt><dd>${v}</dd></div>`}
function setTaskCompleted(id, completed){
  const x=state.tasks.find(t=>t.id===id); if(!x)return;
  const now=new Date().toISOString();
  x.status = completed ? "Done" : "Open";
  x.completedAt = completed ? (x.completedAt || now) : "";
  x.updatedAt = now;
  save();
  toast(completed?t("toastDone"):t("toastReopened"));
  closeModal();
  renderPage();
}
function duplicateTask(id){
  const x=state.tasks.find(t=>t.id===id); if(!x)return;
  const now=new Date().toISOString();
  state.tasks.unshift({...x,id:uid(),title:x.title+" Copy",status:"Open",createdAt:now,updatedAt:now,completedAt:""});
  save();closeModal();renderPage();toast(t("toastDuplicated"));
}
function confirmDelete(id){
  const x=state.tasks.find(t=>t.id===id); if(!x)return;
  openModal(`<div class="modal modal-sm"><div class="modal-head"><div><span class="eyebrow">${t("delete")}</span><h3>${t("confirmDeleteT")}</h3></div><button class="modal-close" onclick="closeModal()">${I.close}</button></div><div class="modal-body"><p style="color:var(--muted)">${t("confirmDeleteP")}</p><div class="note-box" style="margin-top:14px">${esc(x.title)}</div></div><div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">${t("keepIt")}</button><button class="btn btn-danger" onclick="deleteTask('${id}')">${I.trash}${t("yesDelete")}</button></div></div>`);
}
function deleteTask(id){state.tasks=state.tasks.filter(x=>x.id!==id);save();closeModal();renderPage();toast(t("toastDeleted"))}
function confirmReset(){
  openModal(`<div class="modal modal-sm"><div class="modal-head"><div><span class="eyebrow">${t("resetData")}</span><h3>${t("confirmResetT")}</h3></div><button class="modal-close" onclick="closeModal()">${I.close}</button></div><div class="modal-body"><p style="color:var(--muted)">${t("confirmResetP")}</p></div><div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">${t("keepIt")}</button><button class="btn btn-danger" onclick="resetData()">${I.reset}${t("yesReset")}</button></div></div>`);
}
function resetData(){state.tasks=[];save();closeModal();renderPage();toast(t("toastReset"))}
function exportData(){
  const blob = new Blob([JSON.stringify({tasks:state.tasks,appName:state.appName,exportedAt:new Date().toISOString()},null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="taskflow-blueprint-backup.json";a.click();URL.revokeObjectURL(a.href);toast(t("toastExported"));
}
function importData(file){
  if(!file)return;
  const r=new FileReader();
  r.onload=()=>{try{const data=JSON.parse(r.result);if(!Array.isArray(data.tasks))throw new Error("bad");state.tasks=data.tasks; state.appName=data.appName||state.appName; save();renderPage();toast(t("toastImported"));}catch(e){toast(t("toastImportErr"),"err")}};
  r.readAsText(file);
}
function formatFocus(){
  const m=String(Math.floor(state.focusSeconds/60)).padStart(2,"0");
  const s=String(state.focusSeconds%60).padStart(2,"0");
  return `${m}:${s}`;
}
function updateFocusDisplay(){const el=document.getElementById("focusTime"); if(el)el.textContent=formatFocus(); localStorage.setItem("tf_focus_seconds",state.focusSeconds)}
function startFocus(){
  if(state.timer)return;
  state.timer=setInterval(()=>{
    state.focusSeconds=Math.max(0,state.focusSeconds-1);
    updateFocusDisplay();
    if(state.focusSeconds===0){pauseFocus();toast("Focus sprint complete","ok")}
  },1000);
}
function pauseFocus(){clearInterval(state.timer);state.timer=null}
function resetFocus(){pauseFocus();state.focusSeconds=1500;updateFocusDisplay()}
function renderPage(){
  let html = "";
  if(page==="tasks") html = tasksView();
  else if(page==="board") html = boardView();
  else if(page==="projects") html = projectsView();
  else if(page==="calendar") html = calendarView();
  else if(page==="analytics") html = analyticsView();
  else if(page==="focus") html = focusView();
  else if(page==="settings") html = settingsView();
  else html = dashboardView();
  shell(html);
  const projectFilter = localStorage.getItem("tf_project_filter");
  if(page==="tasks" && projectFilter){state.query=projectFilter;localStorage.removeItem("tf_project_filter");setTimeout(renderPage,0)}
}
document.addEventListener("keydown",e=>{
  if(e.key==="Escape")closeModal();
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="n"){e.preventDefault();openTaskForm()}
});
load();
renderPage();
