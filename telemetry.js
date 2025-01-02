function logTelemetryEvent(eventName, eventData) {
    console.log(eventName + ":", eventData);
}

// Exemple de données de télémétrie pour différents événements
const telemetryEvents = [
    { name: "KernelProcess.AppStateChangeSummary", data: { state: "active" } },
    { name: "Microsoft.Office.AppCompat.AddInLoad", data: { addInName: "ExampleAddIn" } },
    { name: "Microsoft.Office.AppCompat.AddInCrash", data: { addInName: "ExampleAddIn", reason: "unexpected error" } },
{ name:KernelProcess.AppStateChangeSummary },
{ name: Microsoft.Office.AppCompat.AddInLoad },
{ name: Microsoft.Office.AppCompat.AddInCrash },
{ name: Microsoft.Office.AppCompat.MacroFailure },
{ name: Microsoft.Office.AppCompat.ApplicationStartEvent },
{ name: Microsoft.Office.AppCompat.ApplicationLifecycleEvent },
{ name: Microsoft.Office.AppCompat.UngracefulAppExit },
{ name: Microsoft.Office.ClickToRun.UpdateStatus },
{ name: Microsoft.Office.CorrelationMetadata.UTCCorrelationMetadata },
{ name: Microsoft.Office.SessionIdProvider.OfficeProcessSessionStart },
{ name: Microsoft.Office.TelemetryEngine.FirstIdle },
{ name: Microsoft.Office.TelemetryEngine.FirstProcessed },
{ name: Microsoft.Office.TelemetryEngine.FirstRuleRequest },
{ name: Microsoft.Office.TelemetryEngine.Init },
{ name: Microsoft.Office.TelemetryEngine.IsPreLaunch },
{ name: Microsoft.Office.TelemetryEngine.Resume },
{ name: Microsoft.Office.TelemetryEngine.RuleRequestFailed },
{ name: Microsoft.Office.TelemetryEngine.RuleRequestFailedDueToClientOffline },
{ name: Microsoft.Office.TelemetryEngine.SessionHandOff },
{ name: Microsoft.Office.TelemetryEngine.ShutdownComplete },
{ name: Microsoft.Office.TelemetryEngine.ShutdownStart },
{ name: Microsoft.Office.TelemetryEngine.SuspendComplete }, 
{ name: Microsoft.Office.TelemetryEngine.SuspendStart },
{ name: Microsoft.OSG.OSS.CredProvFramework.ReportResultStop },
{ name: Microsoft.Windows.Kernel.Power.OSStateChange },
{ name: Microsoft.Windows.LogonController.LogonAndUnlockSubmit },
{ name: Microsoft.Windows.LogonController.SignInFailure },
{ name: Microsoft.Windows.Security.Biometrics.Service.BioServiceActivityCapture },
{ name: Microsoft.Windows.Security.Winlogon.SystemBootStop },
{ name: Microsoft.Windows.Shell.Desktop.LogonFramework.AllLogonTasks },
{ name: Microsoft.Windows.Shell.Desktop.LogonFramework.LogonTask },
{ name: Microsoft.Windows.Shell.Explorer.DesktopReady },
{ name: Microsoft-Windows-Security-EFS-EDPAudit-ApplicationLearning.EdpAuditLogApplicationLearning },
{ name: Win32kTraceLogging.AppInteractivitySummary },
    // Ajoutez d'autres événements ici
];

// Enregistrer les événements de télémétrie
telemetryEvents.forEach(event => logTelemetryEvent(event.name, event.data));
