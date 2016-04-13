/**
 * Created by Christopher on 4/12/2016.
 */
$(function() {

    var barA1 = {
        x: ["Aerobacter aerogenes", "Brucella abortus", "Brucella anthracis", "Diplococcus pneumoniae",
        "Escherichia coli", "Klebsiella pneumoniae", "Mycobacterium tuberculosis", "Proteus vulgaris",
        "Pseudomonas aeruginosa", "Salmonella typhosa", "Salmonella schottmuelleri",
        "Staphylococcus albus", "Staphylococcus aureus", "Streptococcus fecalis", "Streptococcus hemolyticus",
        "Streptococcus viridans"],
        y: [870, 1, 0.001, 0.005, 100, 850, 800, 3, 850, 1, 10, 0.007, 0.03, 1, 0.001, 0.005],
        type: 'bar',
        name: "Penicilin",
        marker: {
            color: "rgb(255, 0, 250)",
            opacity: 0.7
        }
    };

    var barA2 = {
        x: ["Aerobacter aerogenes", "Brucella abortus", "Brucella anthracis", "Diplococcus pneumoniae",
            "Escherichia coli", "Klebsiella pneumoniae", "Mycobacterium tuberculosis", "Proteus vulgaris",
            "Pseudomonas aeruginosa", "Salmonella typhosa", "Salmonella schottmuelleri",
            "Staphylococcus albus", "Staphylococcus aureus", "Streptococcus fecalis", "Streptococcus hemolyticus",
            "Streptococcus viridans"],
        y: [1, 2, 0.01, 11, 0.4, 1.2, 5, 0.1, 2, 0.4, 0.8, 0.1, 0.03, 1, 14, 10],
        type: 'bar',
        name: "Streptomycin",
        marker: {
            color: "rgb(0, 247, 250)",
            opacity: 0.7
        }
    };

    var barA3 = {
        x: ["Aerobacter aerogenes", "Brucella abortus", "Brucella anthracis", "Diplococcus pneumoniae",
            "Escherichia coli", "Klebsiella pneumoniae", "Mycobacterium tuberculosis", "Proteus vulgaris",
            "Pseudomonas aeruginosa", "Salmonella typhosa", "Salmonella schottmuelleri",
            "Staphylococcus albus", "Staphylococcus aureus", "Streptococcus fecalis", "Streptococcus hemolyticus",
            "Streptococcus viridans"],
        y: [1.6, 0.02, 0.007, 10, 0.1, 1, 2, 0.1, 0.4, 0.008, 0.09, 0.001, 0.001, 0.1, 10, 40],
        type: 'bar',
        name: "Neomycin",
        marker: {
            color: "rgb(25, 25, 250)",
            opacity: 0.7
        }
    };

    var dataA = [barA1, barA2, barA3];

    var layout1 = {
       title: "Effectiveness of different antibacterials",
        xaxis: {
            tickangle: 25
        },
        yaxis: {
            type: "log",
        },
        barmode: 'group'
    };

    Plotly.newPlot("Chart1", dataA, layout1)

    var dataB1 = {
        x: [1, 2, 0.4, 1.2, 5, 0.1, 2, 0.4, 0.8],
        y: [1.6, 0.02, 0.1, 1, 2, 0.1, 0.4, 0.008, 0.09],
        mode: "markers",
        name: "Negative Staining",
        text: ["Aerobacter aerogenes", "Brucella abortus", "Escherichia coli", "Klebsiella pneumoniae",
            "Mycobacterium tuberculosis", "Proteus vulgaris", "Pseudomonas aeruginosa",
            "Salmonella typhosa", "Salmonella schottmuelleri"],
        marker: {
            size: 15,
            color: "rgb(191, 11, 41)"
        }
    };

    var dataB2 = {
        x: [0.01, 11, 0.1, 0.03, 1, 14, 10],
        y: [0.007, 10, 0.001, 0.001, 0.1, 10, 40],
        mode: "markers",
        name: "Positive Staining",
        text: ["Brucella anthracis", "Diplococcus pneumoniae", "Staphylococcus albus", "Staphylococcus aureus",
            "Streptococcus fecalis", "Streptococcus hemolyticus",
            "Streptococcus viridans"],
        marker: {
            size: 15,
            color: "rgb(11, 191, 59)"

        }
    };

    var dataB = [dataB1, dataB2];

    var layout2 = {
        yaxis: {
            type: "log"
        },
        title: "Relation between Gram Staining and effectiveness"
    }

    Plotly.newPlot("Chart2", dataB, layout2)

});