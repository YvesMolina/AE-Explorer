def summarize_ae_data(df):
    summary = {
        "event_counts": df["event"].value_counts().to_dict(),
        "severity_counts": df["severity"].value_counts().to_dict(),
        "serious_counts": df["serious"].value_counts().to_dict()
    }
    return summary